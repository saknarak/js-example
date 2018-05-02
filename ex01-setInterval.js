var i = 0
var t = setInterval(function() {
  console.log('i =', i)
  i++
  if (i === 10) {
    console.log('done')
    clearInterval(t)
  }
}, 500)
