//Exercise 17
/*Task
In this challenge, we're going to implement a 'curry' function for an arbitrary number of arguments.
curryN will take two parameters:
  * fn: The function we want to curry.
  * n: Optional number of arguments to curry. If not supplied, `curryN` 
  * should use the fn's arity as the value for `n`.
 */
function curryN(fn, n) {
    // SOLUTION GOES HERE
    n = n || fn.length
    function curryMe (f) {
      if (n <= 1) return fn (f)
    return curryN(fn.bind(fn, f), n-1)
    }
    return curryMe
  }

  module.exports = curryN
