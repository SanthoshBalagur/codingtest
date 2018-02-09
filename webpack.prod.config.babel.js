import config from './webpack.config.babel'
import webpack from 'webpack'

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin()
)

export default config