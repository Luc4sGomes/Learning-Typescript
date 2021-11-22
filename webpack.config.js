const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/Exercicio-019/Exercicio-019',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        loader: 'ts-loader',
        configFile: 'tsconfig.frontend.json',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },

  devtool: 'source-map',
};
