const defaultTo = require('lodash.defaultto')
const get = require('lodash.get')
const isArray = require('lodash.isarray')

const DEFAULT_LENGTH = 0

module.exports = function len (target) {
  return isArray(target)
    ? defaultTo(get(target, 'length'), DEFAULT_LENGTH)
    : DEFAULT_LENGTH
}

