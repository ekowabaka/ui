import path from 'path';
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sharedRules = [
  // 1. Global SASS in sass/ directory -> compiled and extracted
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
];

const unminifiedConfig = {
  mode: 'production',
  devtool: false,
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
  optimization: {
    minimize: false,
  },
  module: {
    rules: sharedRules,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fzui.css',
    }),
  ],
};

const minifiedConfig = {
  mode: 'production',
  devtool: false,
  entry: './js/fzui.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'fzui.min.js',
    library: {
      name: 'fzui',
      type: 'umd',
    },
    globalObject: 'typeof self !== "undefined" ? self : this',
    clean: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: sharedRules,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'fzui.min.css',
    }),
  ],
};

export default [unminifiedConfig, minifiedConfig];
