// #2
// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.

// Parameters
// an array of integers
// remove lowest value integer, if more than one, take off the lowest index

// Return
// return new updated array

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// Pseudo Code
// find lowest integer in array  -- Math.min()
// store in variable
// remove lowest integer -- .filter
// if more than one integer, only remove the last index

function removeSmallest(numbers) {
	const copy = numbers.slice(0);
	let min = numbers.indexOf(Math.min(...numbers));
	copy.splice(min, 1);
	return copy;
}
removeSmallest([2, 2, 1, 2, 1]);
