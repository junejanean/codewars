//Implement a function which convert the given boolean value
//into its string representation.

// Parameters
// given a boolean value
// True or False

// Return
// return the string of that boolean value

// Examples
// Ex: Input = (true, false) = ("true", "false")

// Pseudo Code

// Solution 1
function booleanToString(b) {
	if (b) {
		return 'true';
	} else {
		return 'false';
	}
}
booleanToString(false);

// Solution 2
function booleanToString(b) {
	return b + '';
}
booleanToString(false);

// Solution 3
function booleanToString(b) {
	return b.toString();
}
