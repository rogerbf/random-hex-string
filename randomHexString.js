const asynchronous = (randomBytes, length, callback) =>
  callback
  ? (
    randomBytes(length, (error, data) => {
      error
      ? callback(error)
      : callback(null, data.toString(`hex`))
    })
  )
  : (
    new Promise((resolve, reject) => {
      randomBytes(length, (error, data) => {
        error
        ? reject(error)
        : resolve(data.toString(`hex`))
      })
    })
  )

const synchronous = (randomBytes, length) =>
  randomBytes(length).toString(`hex`)

module.exports = {
  asynchronous,
  synchronous
}
