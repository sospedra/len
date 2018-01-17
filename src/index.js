const defaultTo = require('lodash.defaultto')
const get = require('lodash.get')

const DEFAULT_LENGTH = 0

module.exports = function len (target) {
  return Array.isArray(target)
    ? defaultTo(get(target, 'length'), DEFAULT_LENGTH)
    : DEFAULT_LENGTH
}
