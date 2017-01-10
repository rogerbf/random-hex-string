const { asynchronous, synchronous } = require(`./randomHexString`)

test(`synchronous`, () => {
  const randomBytes = jest.fn(length => {
    if (length === 3) return Buffer.from(`hexstr`)
    else { throw Error(`error`) }
  })

  const sync = synchronous(randomBytes, 3)
  expect(randomBytes.mock.calls[0]).toEqual([ 3 ])
  expect(sync).toEqual(`686578737472`)

  expect(() => synchronous(randomBytes, 0)).toThrow()
})

test(`asynchronous (promise)`, () => {
  const randomBytes = jest.fn((length, callback) => {
    length === 3 && callback(null, Buffer.from(`hexstr`))
    length !== 3 && callback(`an error`)
  })

  asynchronous(randomBytes, 3)
  .then(result => expect(result).toEqual(`686578737472`))
  .catch(error => expect(error).toBeFalsy())

  asynchronous(randomBytes, 0)
  .then(result => expect(result).toBeFalsy())
  .catch(error => expect(error).toEqual(`an error`))
})

test(`asynchronous (callback)`, () => {
  const randomBytes = jest.fn((length, callback) => {
    length === 3 && callback(null, Buffer.from(`hexstr`))
    length !== 3 && callback(`an error`)
  })

  asynchronous(randomBytes, 3, (error, data) => {
    expect(error).toBeFalsy()
    expect(data).toEqual(`686578737472`)
  })

  asynchronous(randomBytes, 0, (error, data) => {
    expect(error).toEqual(`an error`)
    expect(data).toBeFalsy()
  })
})
