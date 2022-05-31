// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

// Parameters
// an array of numbers, the positive ones return a string
// positive numbers return sheep
// negative numbers

// Return
// count the amount of numbers, positive return string sheep and index number

// Examples
//2 positive numbers = 1 sheep...2 sheep

// Pseudo Code

var countSheep = function (num) {
	let sheep = '';
	for (var i = 1; i <= num; i++) {
		sheep += i + ' ' + 'sheep...';
	}
	return sheep;
};
