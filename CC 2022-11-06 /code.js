//Let's play! You have to return which player won!
// In case of a draw return Draw!.

// Parameters
// given a type - paper, rock or scissors
// compare the two to see which one is the winner

// Return
// 7 different results
// if rock and paper, paper wins
// if scissors and rock, rock wins
// if paper and scissors, scissors wins
// if the same type, return "Draw!"

// Examples (Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Pseudo Code

const rps = (p1, p2) => {
	let result = null;
	if (p1 === p2) {
		result = 'Draw!';
	}
	if (p1 === 'scissors' && p2 === 'paper') {
		result = 'Player 1 won!';
	}
	if (p1 === 'scissors' && p2 === 'rock') {
		result = 'Player 2 won!';
	}
	if (p1 === 'paper' && p2 === 'rock') {
		result = 'Player 1 won!';
	}
	if (p1 === 'paper' && p2 === 'scissors') {
		result = 'Player 2 won!';
	}
	if (p1 === 'rock' && p2 === 'paper') {
		result = 'Player 2 won!';
	}
	if (p1 === 'rock' && p2 === 'scissors') {
		result = 'Player 1 won!';
	}
	return result;
};
rps('rock', 'scissors');
