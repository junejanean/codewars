//Make a program that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
//Otherwise, you can be sure he's not...

// Parameters
// find the string of letters that has four letters

// Return
// return the strings with four letters

// Examples
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Pseudo Code

function friend(friends) {
	let realFriends = [];
	for (var i = 0; i < friends.length; i++) {
		if (friends[i].length === 4) {
			realFriends.push(friends[i]);
		}
	}
	return realFriends;
}
friend(['Ryan', 'Kieran', 'Mark']);
