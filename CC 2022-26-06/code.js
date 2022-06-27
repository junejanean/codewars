// #1
//  In this kata, you are asked to square every digit of a number and concatenate them.

// Parameters
// an integer

// Return
// an integer where each seperate digit is squared

// Examples
// * Input: 9119, output= 81118 -- 9 squared is 81 and 1 squared is 1

// Pseudo Code
// seperate out the digits
// square them
// concate them together

function squareDigits(num) {
	let result = '';
	let numStr = String(num);
	numStr.split('').forEach((digit) => {
		let squared = digit * digit;
		result += squared;
	});
	return parseInt(result);
}
squareDigits(3212);

// #2
//  Return the number (count) of vowels in the given string.

// Parameters
// a word

// Return
// the number of vowels

// Examples
// * Input: abracadabra, output= 5

// Pseudo Code
// check for vowels a, e, i, o, u
// count how many
// return total number of times counted

const getCount = (str) =>
	Array.from(str).filter((letter) => 'aeiou'.includes(letter)).length;

getCount('abracadabra');
