module.exports = {
  entry: [
    {
      key: 'index',
      filename: 'index.html',
      template: 'src/index.html',
      chunks: 'app'  
    },
    {
      key: 'two',
      filename: 'two.html',
      template: 'src/two.html',
      chunks: 'two'  
    }
  ]
}