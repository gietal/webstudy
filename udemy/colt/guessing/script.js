
var secretNumber = 9

var answer

while(answer != secretNumber) { 
	if (answer === undefined) {
		answer = prompt("take a guess")
	} else {
		if (answer < secretNumber) {
			answer = prompt("guess higher")
		} else if (answer > secretNumber) {
			answer = prompt("guess lower")
		} else if (answer !== secretNumber) {
			answer = prompt("guess a number bro")
		}
	}
	
	
}

alert("you guessed the correct secret number: " + secretNumber)