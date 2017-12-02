var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
module.exports = {
  entry: {
    index: './public/js_src/index.js'
  },  
  // devServer: {
  //   contentBase: './public',
  //   inline: true,
  //   hot: true
  // },  
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    })
  ]
}