// Write a function that takes an array of numbers and returns the sum of the numbers.
// The numbers can be negative or non-integer.
//If the array does not contain any numbers then you should return 0.

// Parameters
// an array of numbers

// Return
// sum of the numbers

// Examples
// Input: [1, 5.2, 4, 0, -1] Output: 9.2
// Input: [] Output: 0
// Input: [-2.398] Output: -2.39

// Pseudo Code

// #1 Solution
function sum(numbers) {
	let total = 0;
	if (numbers == []) {
		return 0;
	} else {
		for (i = 0; i < numbers.length; i++) {
			total += numbers[i];
		}
	}
	return total;
}
sum([]);
sum([1, 5.2, 4, 0, -1]);

// #2 Solution
function sum(numbers) {
	return numbers.reduce((a, b) => a + b, 0);
}
sum([]);
sum([1, 5.2, 4, 0, -1]);
