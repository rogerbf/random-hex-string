# random-hex-string

Generate a random hex string synchronously or asynchronously with both callback and promise support. Uses `crypto.randomBytes` underneath.

## usage

```javascript
import randomHex from 'random-hex-string'

// synchronously
console.log(randomHex.sync(1))
// i.e. '67'

// asynchronously, callback
randomHex(2, (error, data) => {
  if (error) throw error
  console.log(data)
  // i.e. '231f'
})

// asynchronously, promise
randomHex(2)
.then(data)
.catch(error)
```
