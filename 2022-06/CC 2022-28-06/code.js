// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.

// Parameters
// an array of numbers from 0-9

// Return
//a string that looks like a phone number

// Examples
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// Pseudo Code
// get a random number from array
// loop through array
// put new array into string

function createPhoneNumber(numbers) {
	let phone = '(xxx) xxx-xxxx';

	numbers.forEach((i) => {
		phone = phone.replace('x', i);
	});

	return phone;
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
