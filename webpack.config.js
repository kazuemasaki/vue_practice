var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    index: './public/js_src/index.js'
  },  
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
    }),
    // })
    new UglifyJSPlugin({
      // sourceMap: true
    })
  ]
}