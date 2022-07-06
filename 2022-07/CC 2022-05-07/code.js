// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence
// and returns a list of items without any elements with the same value next
// to each other and preserving the original order of elements.

// Parameters
// a string or array of numbers

// Return
// an array with the elements without any repeats

// Examples
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Pseudo Code
// create an empty array
// ternary to check if it's an array or string
// if string, turn into array
// loop thru the string or array
// if element is === to itself, do not push
// otherwise push to the array
// return array

var uniqueInOrder = function (iterable) {
	let result = [];
	let arr = Array.isArray(iterable) ? iterable : [...iterable];

	for (let i = 0; i < arr.length; i++) {
		if (iterable[i] === iterable[i + 1]) continue;
		result.push(iterable[i]);
	}
	return result;
};
uniqueInOrder('ABBCcAD');
