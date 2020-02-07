module.exports = {
  presets: [['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }]],
  overrides: [
  {
    exclude: [/@babel[\/|\\\\]runtime/],
    plugins: [
      ['@babel/plugin-transform-runtime', { version: '^7.8.4', useESModules: true }]
    ]
  }
  ]
};