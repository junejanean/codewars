//each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets
// he should carry.. Assuming he's gonna grab a specific given number of bullets
// and move forward to fight another specific given number of dragons, will he survive?

// Parameters
// two integers

// Return
// boolean true or false

// Examples
// hero(10, 5), true

// Pseudo Code
// if bullets numbers is modulus of 2
// and dragons
// else false

//solution 1
function hero(bullets, dragons) {
	if (bullets / 2 >= dragons) {
		return true;
	} else {
		return false;
	}
}
hero(10, 5);

//solution 2
function hero(bullets, dragons) {
	return bullets / 2 >= dragons ? true : false;
}
hero(10, 5);
