//Exercise 2
/*# Task
Implement a function that takes a function as its first argument, a number num as its second argument,
then executes the passed in function num times.
Use the boilerplate code given to you below to get started. Most/all future exercises will provide boilerplate.
# Arguments
 operation: A Function, takes no arguments, returns no useful value.
 num: the number of times to call `operation`
 */
function repeat(func, num) {
    // SOLUTION GOES HERE
    if (num <=0 ) return;
    func();
    return repeat(func, --num);
  }

  // Do not remove the line below
  module.exports = repeat;