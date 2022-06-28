// #1
// You are given a list of unique integers arr, and two integers a and b.
// Your task is to find out whether or not a and b appear
// consecutively in arr, and return a boolean value
// (True if a and b are consecutive, False otherwise).

// Parameters
// 3 parameters
// an array of unique integers
// a and b - they will be unique integers number

// Return
// return true if and b are consecutive, otherwise false

// Examples
// [1, 3, 5, 7], 3, 7), false

// Pseudo Code

function consecutive(arr, a, b) {
	let aIndex = arr.indexOf(a);
	let bIndex = arr.indexOf(b);

	let diff = Math.abs(bIndex - aIndex);

	if (diff > 1) {
		console.log(diff, 'false');
		return false;
	} else if (diff === 0) {
		return false;
	} else {
		console.log(diff, 'true');
		return true;
	}
}
consecutive([1, -3, 5, 7], -3, 1);
