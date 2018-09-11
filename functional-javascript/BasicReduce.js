//Exercise 6
/*Task
Given an Array of strings, use Array#reduce to create an object that contains the number 
of times each string occured in the array. Return the object directly (no need to console.log)
Arguments
* inputWords: An array of random Strings.
 */
function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(function(countMap, word){
      countMap[word] = ++countMap[word] || 1
      return countMap
    }, {})
  }

  module.exports = countWords
  