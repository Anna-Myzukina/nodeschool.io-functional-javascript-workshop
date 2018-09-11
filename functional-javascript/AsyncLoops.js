//Exercise 15
/*Fix this code! The callback should be called with all the users loaded.
The order of the users should match the order of supplied user ids. Because this 
function is asynchronous, we do not care about its return value.
# Arguments
  * userIds: an Array of numeric user ids.
  * load: a Function used to load user objects. Expects a numeric id and a callback. 
  * The callback will be called with the result of loading the user with the specified id 
  * (either a user object or null).
  * done: a Function that expects an Array of user objects (as retrieved from `load`).
 */
function loadUsers(userIds, load, done) {
	let users = []
	for (let i = 0; i < userIds.length; i++){
		load(userIds[i], (user) => {
			if (user) {
				users.push(user)
			}
			if (users.length === userIds.length) done(users)
		})
	}
}

module.exports = loadUsers