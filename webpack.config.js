module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: 'babel-loader',
        exclude: file => /node_modules/.test(file) && !/@babel[\/|\\\\]runtime/.test(file)
      }
    ]
  }
};