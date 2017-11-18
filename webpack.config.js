const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var src_dir = './public/js/src/';

module.exports = {
  // エントリーポイントの設定
  entry: {
    app: src_dir+'index.js',
    print: src_dir+'print.js'
  },
  
  devtool: 'inline-source-map',

  plugins: [
    new CleanWebpackPlugin(['public/js/dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],

  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js/dist')
  }
};

