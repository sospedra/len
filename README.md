len
===

Safely access arrays' length property

### Usage

`len` will return the array target or `0`.
Meaning that non-array targets always returns `0`.

```js
import len from '@sospedra/len'

len([]) // 0
len([1, 2]) // 2
len(9) // 0
len('string') // 0
```

### Why?

Most of the errorceptions, bugsnags, sentry, etc. looks like:

`Cannot read property 'length' of undefined`

Also, by returning the length only of arrays we ensure that it's iterable.
Meaning that you can safely check with `len` for `.map`, `.reduce`, *et altri*

```js
if (!len(array)) array.map(myCallback)
```

Wonderful 😍

