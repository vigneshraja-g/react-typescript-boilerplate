const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    open: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
}
