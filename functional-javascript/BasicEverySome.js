//Exercise 5
/*Task
Return a function that takes a list of valid users, and returns a function that returns true if all of the 
supplied users exist in the original list of users.
You only need to check that the ids match
Arguments
* goodUsers: a list of valid users

Use array#some and Array#every to check every user 
passed to your returned function exists in the array passed to the exported function
*/
module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }
}