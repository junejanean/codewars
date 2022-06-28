// Complete the square sum function so that it squares each number passed into it
//and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Parameters
// an array of numbers, that need to be squared
// then added together

// Return
// the total sum of squared numbers, one integer

// Examples
// [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Pseudo Code

function squareSum(numbers) {
	let arr = [];
	for (var i = 0; i < numbers.length; i++) {
		num = Math.pow(numbers[i], 2);
		arr.push(num);
	}
	return arr.reduce((a, b) => a + b, 0);
}
squareSum([1, 2, 2]);
