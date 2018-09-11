//Exercise 14
/*Task
Modify the boilerplate below such that it uses a trampoline to continuously call itself synchronously.
You can assume that the operation passed to repeat does not take arguments (or they are already bound 
to the function) and the return value is not important.
 */
function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    return function() {
        if (num <= 0) return
        operation()
        return repeat(operation, --num)
    }
  }

  function trampoline(fn) {
    // You probably want to implement a trampoline!
    while(fn && typeof fn === 'function') {
        fn = fn()
      }
  }

  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    trampoline(function() {
        return repeat(operation, num)
    })
  }