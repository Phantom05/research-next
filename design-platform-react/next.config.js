const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
})