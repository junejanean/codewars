// #1
//  Complete the function that returns the color of the given square
// on a normal, 8x8 chess board:

// Parameters
// two parameters
// letter
// number

// Return
// 'black' or 'white'

// Examples
// "a", 8  ==>  "white"
// "b", 2  ==>  "black"
// "f", 5  ==>  "white"

// Pseudo Code

function mineColor(file, rank) {
	if (file === 'a' || file === 'c' || file === 'e' || file === 'g') {
		return rank % 2 === 1 ? 'black' : 'white';
	} else {
		return rank % 2 === 0 ? 'black' : 'white';
	}
}
mineColor('a', 8);

/// Make a chess board

var size = 8;
var board = '';

for (var r = 0; r < size; r++) {
	// rows

	for (var s = 0; s < size; s++) {
		// creating a new square, alternating 'white' and 'black'
		board += s % 2 === r % 2 ? 'white ' : 'black ';
	}
	board += '\n';
}
console.log(board);

// #2
// Write a function that returns both the minimum and maximum number
// of the given list/array.

// Parameters
// list or array of numbers
// always at least one integer

// Return
// [min, max] from the array

// Examples
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]

// 1st solution
function minMax(arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return [min, max];
}
minMax([1, 2, 3, 4, 5]);

// 2nd solution
function minMax(arr) {
	return [Math.min(...arr), Math.max(...arr)];
}
minMax([1, 2, 3, 4, 5]);
