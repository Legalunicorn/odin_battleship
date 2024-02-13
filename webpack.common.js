const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
  entry: '/src/index.js',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },

  module:{
    rules:[
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader','css-loader',"sass-loader",]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ],
  },

  plugins:[
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'testing html webpack',
      filename: 'index.html',
      inject: 'body',
    })
  ]
};
