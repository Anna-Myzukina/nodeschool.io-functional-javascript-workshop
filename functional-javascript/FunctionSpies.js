//Exercise 12
/*Task
Override a specified method of an object with new functionality while still maintaining all of the old behaviour.
Create a spy that keeps track of how many times a function is called
 */
function Spy(target, method) {
	let spy = { count : 0 }
	let oldFn = target[method]
	target[method] = function (){
		spy.count++
		return oldFn.apply(this, arguments)
	}
	return spy
}
module.exports = Spy