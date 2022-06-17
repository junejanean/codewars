//Given a list of integers,
// determine whether the sum of its elements is odd or even.

// Parameters
// an array of integers negative or positive
// sum all integers together

// Return
// if an odd number, return a string "odd"
// if an even number, return a string "even"
// if 0 or empty, return even

// Examples
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// Pseudo Code

function oddOrEven(array) {
	let sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	if (sum % 2 === 0) {
		return 'even';
	} else {
		return 'odd';
	}
}
oddOrEven([0, 2, 5]);
