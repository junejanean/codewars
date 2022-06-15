//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

// Parameters
// hours
// minutes
// seconds
// after midnight

// Return
// time in miliseconds

// Examples
// h = 0
// m = 1
// s = 1

// result = 61000

// Pseudo Code

function past(h, m, s) {
	let secondsToMilisec = s * 1000;
	let minutesToMilisec = m * 60000;
	let hoursToMilisec = h * 3600000;

	return secondsToMilisec + minutesToMilisec + hoursToMilisec;
}
past(0, 1, 1);
