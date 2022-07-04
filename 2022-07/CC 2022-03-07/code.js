// In this simple Kata your task is to create a function that turns a string
// into a Mexican Wave. You will be passed a string and you must return that
// string in an array where an uppercase letter is a person standing up.

// Parameters
// a string

// Return
// an array of the string with each letter is capitalized on each interation

// Examples
// wave('codewars') //
// => returns ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]

// Pseudo Code
// create empty array
// use for loop to interate through the letters
// store each letter in a variable
// if the string is an empty string then pass
// else use .slice() and toUpperCase() method to edit the letter
// push each letter to the empty array
// return array

function wave(str) {
	let mexWave = [];
	for (let i = 0; i < str.length; i++) {
		let letter = str[i];
		if (letter === ' ') {
			continue;
		} else {
			mexWave.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1));
		}
	}
	return mexWave;
}
wave('codewars');
