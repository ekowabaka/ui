import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './js/fzui.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fzui.js',
    library: {
      name: 'fzui',
      type: 'umd',
    },
    globalObject: 'typeof self !== "undefined" ? self : this',
    clean: true,
  },
  module: {
    rules: [
      // 1. Global SASS in sass/ directory -> compiled and extracted to dist/fzui.css
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'sass'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      // 2. Component styles in js/ directory -> loaded as raw strings for Shadow DOM
      {
        test: /\.(s[ac]ss|css)$/i,
        include: path.resolve(__dirname, 'js'),
        use: [
          'to-string-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fzui.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'examples/index.html'), to: 'index.html' },
        { from: path.resolve(__dirname, 'examples/assets'), to: 'assets' },
      ],
    }),
  ],
};
