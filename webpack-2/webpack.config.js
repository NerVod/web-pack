const path = require('path');
const chalk = require('chalk');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  console.log(chalk.blue('env :'), env);
  console.log(chalk.blue('options :'), options);

  return {
    mode: 'development',
    entry: [
      './src/index.js',
      './src/index.scss'
    ],

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(),
      // new HtmlWebpackPlugin({
      //   title: 'HtmlWebpackPlugin',
      //   template: './index.html'
      // }),
      new MiniCssExtractPlugin()
    ],
    devtool: 'source-map',


    module: {
      rules: [
        {
          test: /\.s[ac]ss$/,
          use: [
            // Premier loader CSS
            MiniCssExtractPlugin.loader,

            // Deuxième loader CSS
            {
              loader: 'css-loader', // Traduit les fichiers CSS en CommonJS
              options: {
                sourceMap: true
              }
            },

            // Troisième loader CSS
            {
              loader: 'sass-loader', // Compile les fichiers SASS en fichiers CSS
              options: {
                sourceMap: true
              }
            }
          ]
        },

        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
          exclude: /node_modules/,
        }
      ]
    },

    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
        watch: true,
      },
      compress: true, 
      port: 8080,
    }

  };
}