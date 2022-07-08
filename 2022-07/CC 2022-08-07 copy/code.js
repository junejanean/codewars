// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// Parameters
// an array of boolean values

// Return
// sum of true

// Examples
// [true,  true,  true,  false,
//  true,  true,  true,  true ,
//  true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]

// Pseudo Code
// check for null or undefined
// loop thru array with filter
// check length of boolean

// Solution
function countSheeps(arrayOfSheep) {
	return (numOfSheep = arrayOfSheep.filter(Boolean).length);
}
countSheeps([
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
]);
