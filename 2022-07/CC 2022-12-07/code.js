// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
// the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Parameters
// 2 strings of arrays with letters

// Return
//

// Examples
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// Pseudo Code
// create a new array
// and a new Set, which won't allow duplicates
// split letters
// sort out duplicates
// sort in alphabetical order
// join back together

// Solution

function longest(s1, s2) {
	return [...new Set((s1 + s2).split(''))].sort().join('');
}
longest('aretheyhere', 'yestheyarehere');
