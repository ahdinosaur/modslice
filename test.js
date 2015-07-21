var test = require('tape')

var modarray = require('modarray')
var modslice = require('./')

test('slice', function (t) {
  var arr
  var data = [0,1,2,3,4,5,6,7]

  arr = modarray({
    data: data,
    modulo: 4
  })

  t.deepEqual(
    modslice(arr, 0, 8).data,
    [0,1,2,3,0,1,2,3]
  )
  t.deepEqual(
    modslice(arr, 0, 16).data,
    [0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3]
  )

  t.end()
})
