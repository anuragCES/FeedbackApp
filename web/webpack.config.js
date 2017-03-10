const path = require('path');

module.exports = {
  entry: {
    app: './app.ts',
    vendor: './vendor.ts'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname,'build')
  },
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.ts','.js'],
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ] 
  },
  module: {
    rules: [
      {
       test: /\.ts$/,
       loader: 'awesome-typescript-loader',
      }
    ]
  }
}