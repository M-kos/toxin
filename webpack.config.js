const path = require('path');

module.exports = {
    entry: './uikit/src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './uikit/dist')
    },
    module: {
      rules: [
        
      ]
    }
  }