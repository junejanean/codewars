// String ends with?
// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

// Parameters
// a string

// Return
// true or false

// Examples
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// Pseudo Code
// if last two letters in 2st string match the 2nd string, return true
// if they don't, return false

// Solution

function solution(str, ending) {
	// let endStr = str.slice(-1, 0)
	return str.endsWith(ending);
}

solution('abc', 'bc');
