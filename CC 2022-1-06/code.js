// Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Parameters
// string of letters
// take out the vowels

// Return
// write a new string of letters without the vowels

// Examples
// "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Pseudo Code

function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '');
}
disemvowel('This website is for losers LOL!');

// Given an integral number, determine if it's a square number

// Parameters
// string of letters
// take out the vowels

// Return
// write a new string of letters without the vowels

// Pseudo Code

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
