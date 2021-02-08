const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: fs.readdirSync(__dirname).reduce((memo, dir) => {
    const fullDir = path.resolve(__dirname, dir)
    const entry = path.resolve(fullDir, 'app.ts');
    if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
      memo[dir] = ['webpack-hot-middleware/client', entry]
    }
    return memo
  }, {}),
  output: {
    path: path.resolve(__dirname, '__build__'),
    filename: '[name].js',
    publicPath: '/__build__/'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        use: ['tslint-loader']
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }
    ]
  },
  resolve:{
    extensions:[".ts",".tsx",".js"]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
