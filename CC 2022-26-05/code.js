// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Parameters
// all strings

// Return
// return a string with index #

// Examples
// we need to loop through the different strings
// see if they match 'needle'
// if it does, return 'found the needle at position {index}'

// Pseudo Code

function findNeedle(haystack) {
	// for (var i = 0; i < haystack.length; i++) {
	// 	if (haystack[i] === 'needle') {
	// 		var index = haystack[i].indexOf();
	// 		return 'found the needle at position' + index;

	// }

	return 'found the needle at position ' + haystack.indexOf('needle');
}
