//Exercise 4
/*# Task
Use Array#filter to write a function called getShortMessages.
getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are 
less than < 50 characters long.
The function should return an array containing the messages themselves, without their containing object.
# Arguments
  * messages: an Array of 10 to 100 random objects that look something like this:
    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }
 */
function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(function(messageWrapper){
        return messageWrapper.message.length < 50;
    }).map(function(messageWrapper){
        return messageWrapper.message;
    });
  }

  module.exports = getShortMessages;