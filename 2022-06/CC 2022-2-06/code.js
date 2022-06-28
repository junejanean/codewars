// You get an array of numbers, return the sum of all of the positives ones.

// Parameters
// string of numbers , positive and negative
// need to find the positive numbers and sum together
// if there is nothing to sum, the sum is default to 0.

// Return
// return the sum of all positive integers

// Examples
// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Pseudo Code

function positiveSum(arr) {
	sum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			sum += arr[i];
		}
	}
	return sum;
}
positiveSum([
	26, 100, 52, -15, -32, 97, 83, -56, -46, -79, 17, 30, -77, 0, -57, -2, -7, -7,
	95, 47, -12, -61, 73, 73, 33, -14, -6, 96, 20, 48, -63, 28, -15, 29, -38, -91,
	31, 90, 4, 17, -80, 21, 5, -49, -49, -67, 29, -56, -66, -3, -85, 79, 15, 70,
	-50, 16, 92, -36, -62, -23, -58, -54, 60, 64, 69, 79,
]);
