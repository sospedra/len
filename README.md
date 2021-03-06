`len` 🍥
========

[![Build Status](https://travis-ci.org/sospedra/len.svg?branch=master)](https://travis-ci.org/sospedra/len)
[![David](https://img.shields.io/david/sospedra/len.svg)]()
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


Safely access arrays' length property

### Install

```bash
yarn add @sospedra/len
```

*\* vendors/scope are a good idea, let's embrace it!*

### Usage

`len` will return the array target length or `0` 👀

Meaning that **non-array targets always return `0`**.

```js
import len from '@sospedra/len'

len([]) // 0
len([1, 2]) // 2
len(9) // 0
len('string') // 0
len(undefined) // 0
```

### Why?

Most of the errorceptions, bugsnags, sentry, etc. looks like:

> `Cannot read property 'length' of undefined`

And that makes me sad 🤷‍♀️

Also, by returning the length only of arrays **we ensure that it's iterable**.
Meaning that you can safely check for `.map`, `.reduce`, *et altri*

```js
if (len(array)) array.map(myCallback)
```

Wonderful 😍

