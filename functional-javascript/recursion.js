//Exercise 7
/*Task
your reduce function will be passed an array of words, and a function, and an initial value which 
will return an object containing the counts for each word found in the array. You don't need to implement 
this functionality, it will be supplied to your reduce implementation.
For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an 
initial value. You may assume the initial value will always be supplied.
# Arguments
  * arr: An Array to reduce over
  * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed 
  * previousValue, currentValue, index andthe array we're iterating over.
  * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume 
  * it will always be supplied).
 */
function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if (arr.length == 0) return initial
    return reduce(arr.slice(1, arr.length), fn, fn(initial,arr[0]))
  }

  module.exports = reduce