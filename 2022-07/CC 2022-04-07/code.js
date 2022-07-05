// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors.
//A tower block is represented with "*" character.

// Parameters
// a number

// Return
// an array of the string with each letter is capitalized on each interation

// Examples
// a tower with 3 floors looks like this:
// [
//  "  *  ",
//  " *** ",
//  "*****"
// ]

// Pseudo Code
// create empty array
// create for loop based on the number as argument
// .push new floors

function towerBuilder(nFloors) {
	let tower = [];
	for (let i = 0; i < nFloors; i++) {
		tower.push(
			' '.repeat(nFloors - i - 1) +
				'*'.repeat(i * 2 + 1) +
				' '.repeat(nFloors - i - 1)
		);
	}
	return tower;
}
console.log(towerBuilder(5));
