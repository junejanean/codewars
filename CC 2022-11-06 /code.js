//In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

// Parameters
// given a number
// either positive, negative or zero

// Return
// return a negative number if positive
// if negative, return the same number
// if zero, return zero

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Pseudo Code

function makeNegative(num) {
	if (num === 0 || num < 0) {
		return num;
	} else {
		return -num;
	}
}
makeNegative(-13);
