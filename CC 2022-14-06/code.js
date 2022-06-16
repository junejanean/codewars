//Given a non-empty array of integers, return the result of multiplying the values together in order.

// Parameters
// an array with integers
// multiply each integer in their order

// Return
// one integer

// Examples
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Pseudo Code

function grow(x) {
	return x.reduce((a, b) => a * b);
}
grow([4, 1, 1, 1, 4]);
