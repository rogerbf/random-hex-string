const { randomBytes } = require(`crypto`)

const main = (length, callback) => {
  randomBytes(length, (error, data) =>
    error
    ? callback(error, null)
    : callback(null, data.toString(`hex`))
  )
}

const wrap = length => new Promise((resolve, reject) => {
  main(length, (error, data) =>
    error
    ? reject(error)
    : resolve(data)
  )
})

const asynchronous = (length, callback) =>
  typeof (callback) === `function`
  ? main(length, callback)
  : wrap(length)

module.exports = Object.assign(
  asynchronous,
  { sync: length => randomBytes(length).toString(`hex`) }
)
