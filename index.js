'use strict';

const ModArray = require('modarray')
const assign = require('object-assign')

module.exports = slice

function slice (modarray, start, end) {
  modarray = ModArray(modarray)
  start = +start
  end = +end

  const ctor = modarray.data.constructor
  const length = Math.abs(end - start)

  var sliced = new ctor(length)
  for (let i = 0; i < length; i++) {
    sliced[i] = modarray.get(start + i)
  }

  const out = assign(
    {},
    modarray,
    {
      data: sliced
    }
  )

  return ModArray(out)
}
