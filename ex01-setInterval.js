var i = 0
var t = setInterval(function() {
  console.log('i =', i)
  i++
  if (i === 3) {
    clearInterval(t)
  }
}, 1000)
