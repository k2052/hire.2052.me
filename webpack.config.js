const dev = require('./config/webpack/dev.config.js')
const production = require('./config/webpack/production.config.js')

module.exports = function config() {
  if (process.env.NODE_ENV === 'production') {
    return production
  }

  return dev
}
