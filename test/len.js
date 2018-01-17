const test = require('ava')
const len = require('../src')

test('len return array length', (t) => {
  t.is(len([1, 2, 3]), 3, 'when is valid')
  t.is(len([]), 0, 'when is 0')
  t.is(len({}), 0, 'as 0 when is object')
  t.is(len(9), 0, 'as 0 when is number')
  t.is(len('string'), 0, 'as 0 when is string')
  t.is(len(undefined), 0, 'as 0 when is undefined')
})
