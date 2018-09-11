//Exercise 16
/*Task
Implement a recursive function that returns all of the unique dependencies, and sub-dependencies 
of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. []()'.
Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.
 */
function getDependencies(tree) {
	if (tree && tree.dependencies) {
		let dependencies = tree.dependencies
		let ans = []
		Object.keys(dependencies).forEach((key) => {
			var moduleName = `${key}@${dependencies[key].version}`
			ans = ans.concat([moduleName], getDependencies(dependencies[key]))
		})
		return ans.filter((elmt, idx, arr) => arr.indexOf(elmt) === idx).sort()
	}
	return []
}

module.exports = getDependencies