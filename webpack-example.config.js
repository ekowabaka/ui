import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';
import Handlebars from 'handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const examplesDir = path.resolve(__dirname, 'examples');

function registerHandlebarsPartials(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.hbs') && file !== 'index.hbs') {
      const name = path.basename(file, '.hbs');
      const content = fs.readFileSync(path.join(dir, file), 'utf8');
      Handlebars.registerPartial(name, content);
    }
  }
}

// Webpack plugin to add examples/ to watch dependencies
class WatchExamplesPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('WatchExamplesPlugin', (compilation) => {
      compilation.contextDependencies.add(examplesDir);
    });
  }
}

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {},
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
  plugins: [
    new WatchExamplesPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(examplesDir, 'index.hbs'),
          to: 'index.html',
          transform(content) {
            const templateStr = content.toString();
            const dataPath = path.resolve(examplesDir, 'index.json');
            const data = fs.existsSync(dataPath)
              ? JSON.parse(fs.readFileSync(dataPath, 'utf8'))
              : {};
            registerHandlebarsPartials(examplesDir);
            const compiled = Handlebars.compile(templateStr);
            return compiled(data);
          },
        },
        { from: path.resolve(examplesDir, 'assets'), to: 'assets' },
      ],
    }),
  ],
};
