// Take a Ten Minutes Walk
//The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter strings
// representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only
// a single block for each letter (direction) and you know it takes you one minute
// to traverse one city block, so create a function that will return true if
// the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course,
// return you to your starting point.
// Return false otherwise.

// Parameters
// an array of strings
// strings can be the letter 'n', 's', 'e', 'w'

// Return
// a string 'should return true' or 'should return false'

// Examples
// ['n','s','n','s','n','s','n','s','n','s']), 'should return true'
//['w']), 'should return false');

// Pseudo Code
// Walk has to be for 10 minutes
// if walk.length === 10 // true
//
// count the length of the array
// if 10 === true
// or if there are more than 5 'n'
// else false

function isValidWalk(walk) {
	ns = 0;
	ew = 0;
	let walkLength = walk.length;
	let n = [];
	if (walk.length === 10) {
		walk.forEach((i) => {
			if (i === 'n') ns += 1;
			if (i === 's') ns -= 1;
			if (i === 'w') ew += 1;
			if (i === 'e') ew -= 1;
		});
	} else return false;
	return ns === 0 && ew === 0;

	if (walkLength === 10 && n.length <= 5) {
		return 'should return true';
	} else {
		return 'should return false';
	}
}
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
isValidWalk(['w']);
isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']);
