var x = new test()
setInterval(function() {
  console.log('x.name=', x.name)
}, 3000)
function test() {
  console.log('test')
  this.name = 'Somsak'
  setInterval(() => {
    this.name += '*'
  }, 1000)
}
// function test() {
//   console.log('test')
//   this.name = 'Somsak'
//   var me = this
//   setInterval(function() {
//     me.name += '*'
//   }, 1000)
// }
// function test() {
//   console.log('test')
//   this.name = 'Somsak'
//   setInterval(function() {
//     this.name += '*'
//   }.bind(this), 1000)
// }
