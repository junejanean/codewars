//You receive an array with your peers' test scores.
// Now calculate the average and compare your score.
// Return True if you're better, else False!

// Parameters
// two parameters
// 1. array of scores
// 2. your score

// Return
// return True if your score is higher than the average,
// otherwise return false

// Examples
// [100, 40, 70, 80], 85
// average of arr = 72.5
// return true

// Pseudo Code

// Solution 1
function betterThanAverage(classPoints, yourPoints) {
	const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
	if (average < yourPoints) {
		return true;
	} else return false;
}
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75);

// Solution 2
function booleanToString(b) {
	return b + '';
}
booleanToString(false);

// Solution 3
function booleanToString(b) {
	return b.toString();
}
