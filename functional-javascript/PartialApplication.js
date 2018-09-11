//Exercise 9
/*Task
Use partial application to create a function that fixes the first argument to console.log.  i.e. Implement 
a logging function that prepends 
anamespace string to its output.
Your implementation should take a namespace String and return a function that prints messages to the console 
with the namespace prepended.
You should use Function#apply to implement the partial application.
Make sure all arguments passed to the returned logging function are printed.
Print the output to the console directly
# Arguments
* namespace: a String to prepend to each message passed to the returned function
 */
var slice = Array.prototype.slice

    function logger(namespace) {
      // SOLUTION GOES HERE
      return function() {
        let arr = Array.from(arguments)
        console.log.apply(console, [namespace].concat(arr))
      }
    }

    module.exports = logger