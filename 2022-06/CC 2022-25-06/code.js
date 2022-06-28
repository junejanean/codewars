// Simple, given a string of words, return the length of the shortest word(s).

// Parameters
// a string of words
//

// Return
// return the length of the shortest words

// Examples
// * Input: "bitcoin take over the world maybe who knows perhaps" output= 3

// Pseudo Code
// turn the words into an array
// iterate over each word
// count how many letters in each word
// return the shortest amount of letters in a word

function findShort(s) {
	return (str = Math.min(...s.split(' ').map((word) => word.length)));
}
findShort('bitcoin take over the world maybe who knows perhaps');
