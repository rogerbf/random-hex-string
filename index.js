const { randomBytes } = require(`crypto`)
const { synchronous, asynchronous } = require(`./randomHexString`)

module.exports = Object.assign(
  asynchronous.bind(null, randomBytes),
  {
    sync: synchronous.bind(null, randomBytes)
  }
)
