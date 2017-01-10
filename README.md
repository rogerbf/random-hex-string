# random-hex-string

Generate a random hex string synchronously or asynchronously with both callback and promise support. Uses `crypto.randomBytes` within.

## usage

```javascript
import randomHex from 'random-hex-string'

// synchronously
randomHex.sync(1)
// i.e. '67'

// asynchronously, callback
randomHex(2, (error, data) => {
  if (error) throw error
  data
  // i.e. '231f'
})

// asynchronously, promise
randomHex(2)
.then(data)
.catch(error)
```
