// Reverse words
// Complete the function that accepts a string parameter, and
// reverses each word in the string. All spaces in the string should be retained.

// Parameters
// a string

// Return
// a string in reverse order

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// Pseudo Code
// split the words into an array
// reverse the string
// join it back together
// split the letters of each word, hence the space between quotes split(' ')
// reverse the letters
// join the letters back together

// Solution
function reverseWords(str) {
	return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
reverseWords('The quick brown fox jumps over the lazy dog.');
