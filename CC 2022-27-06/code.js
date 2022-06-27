// #1 Convert string to camel case
//  Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized
// only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Parameters
// a string with dashes or underscores

// Return
// a string that is pascal case
// first word should be capitalized only if it was already

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// Pseudo Code
// create new string
// check for a string
// check for dashes or underscores
// capitalize the first letter after the dash or underscore
// check if first letter is capitilized
// capitalize if not
// take out dashes or underscores
// return new string

function toCamelCase(str) {
	let newStr = '';
	if (str) {
		let arr = str.split(/[-_]/g);
		for (let i in arr) {
			if (i > 0) {
				newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
			} else {
				newStr += arr[i];
			}
		}
	} else {
		return newStr;
	}
	return newStr;
}
toCamelCase('the_stealth_warrior');
toCamelCase('The-Stealth-Warrior');
toCamelCase('A-B-C');
