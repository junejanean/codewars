// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

// Parameters
// array of numbers both positive and negative

// Return
// the opposite positive or negative value

// Examples
// multiply each integer by -1 to become negative
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// Pseudo Code

// 1st option
function invert(array) {
	newArr = [];
	for (var i = 0; i < array.length; i++) {
		newArr.push(array[i] * -1);
	}
	return newArr;
}

invert([1, -2, 3, -4, 5]);

// 2nd option
function invert(array) {
	return array.map((i) => i * -1);
}
invert([1, -2, 3, -4, 5]);
