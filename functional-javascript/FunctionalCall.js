//Exercise 18
/*
# Task
Write a function that allows you to use Array.prototype.slice without using 
slice.call or slice.apply to invoke it.
Normally you have to use slice with call or apply:
    var slice = Array.prototype.slice

    function() {
      var args = slice.call(arguments) // this works
    }
We want this to work:
    var slice = yourFunction

    function() {
      var args = slice(arguments) // this works
    }
    Hints
  * This is absolutely a one liner.
  * Every JavaScript Function inherits methods such as call, apply and bind from the object `Function.prototype`.
  * Function#call executes the value of `this` when it is invoked.  Inside `someFunction.call()`, the value of `this` will be `someFunction`.
  * Function.call itself is a function thus it inherits from `Function.prototype`
    function myFunction() {
      console.log('called my function')
    }
    Function.prototype.call.call(myFunction) // => "called my function"

*/
module.exports = Function.call.bind(Array.prototype.slice)