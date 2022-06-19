//Convert number to reversed array of digits
// Given a random non-negative number,
// you have to return the digits of this number within an array
// in reverse order.

// Parameters
// an array of non-negative numbers

// Return
// the array of numbers, reversed

// Examples
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

// Pseudo Code

function digitize(n) {
	return (arr = n.toString().split('').reverse().map(Number));
}
digitize(35231);
