//Given an array of integers.

//Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

// Parameters
// positive and negative integers
// 0 is null
// empty array is []

// Return
// the count both positive and negative integers

// Examples
// need to loop through to see if integer is positive or negative
// count all positive numbers
// sum all negative numbers
// if 0, it's neither positive or negative
// empty array is []

// Pseudo Code

function countPositivesSumNegatives(input) {
	// let positive = [];
	// let negative = [];
	// for (let i = 0; i <= input.length; i++)
	// 	if ((positive = i > 0)) {
	// 		positive++;
	// 	} else if (input[i] < 0) {
	// 		negative += input[i];
	// 	}
	// // return positive + negative;
	// return [positive, negative];

	let positive = 0;
	let negative = 0;
	if (input === null || input.length === 0) {
		return [];
	} else {
		input.forEach((num) => (num > 0 ? positive++ : (negative += num)));
	}
	return [positive, negative];
}

countPositivesSumNegatives([1, 2, 4, -1, 0, -2, 3, -4]);
