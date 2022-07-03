// Remove exclamation marks
// Write function RemoveExclamationMarks which removes all
// exclamation marks from a given string.

// Parameters
// a string

// Return
// a string with no exclamation marks

// Examples
// removeExclamationMarks("Hello World!"), "Hello World

// Pseudo Code
//

function removeExclamationMarks(s) {
	return s.replace(/\!/g, '');
}

removeExclamationMarks = (s) => s.replace(/\!/g, '');

removeExclamationMarks('Hello World!');
