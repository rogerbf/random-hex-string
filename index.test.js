const randomHex = require(`./index`)

test(`randomHex synchronous`, () => {
  const sync = randomHex.sync(1)
  expect(typeof (sync)).toBe(`string`)
  expect(sync.length).toBe(2)

  expect(() => randomHex.sync()).toThrow()
})

test(`randomHex asynchronous (promise)`, () => {
  // const p = randomHex(2)
  // expect(p.constructor.name).toEqual(`Promise`)
  // p.then(
  //   data => {
  //     expect(typeof (data)).toBe(`string`)
  //     expect(data.length).toBe(4)
  //   }
  // ).catch(
  //   error => {
  //     expect(error).toBeFalsy()
  //   }
  // )

  randomHex()
  .then(data => {
    expect(data).toBeFalsy()
  })
  .catch(error => {
    expect(error).toBeTruthy()
  })
})

// test(`randomHex asynchronous (callback)`, () => {
//   randomHex(3, (error, data) => {
//     expect(error).toBeFalsy()
//     expect(typeof (data)).toBe(`string`)
//     expect(data.length).toBe(6)
//   })
//
//   randomHex(-1, (error, data) => {
//     expect(error).toBeTruthy()
//   })
// })
