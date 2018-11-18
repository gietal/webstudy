
var p1Button = document.getElementById("p1")
var p2Button = document.getElementById("p2")
var resetButton = document.getElementById("reset")
var inputField = document.getElementsByTagName("input")[0]
var paragraph = document.getElementsByTagName("p")[0]
var title = document.getElementsByTagName("h1")[0]
var p1ScoreText = document.getElementById("p1Score")
var p2ScoreText = document.getElementById("p2Score")
var maxScoreText = document.getElementById("maxScore")

var p1Score = 0
var p2Score = 0
var maxScore = 5
var gameOver = false

function win() {
	alert("winner")
	gameOver = true
}

function reset() {
	p1Score = 0
	p2Score = 0
	gameOver = false
	p1ScoreText.textContent = 0
	p2ScoreText.textContent = 0
	p1ScoreText.classList.remove("winner")
	p2ScoreText.classList.remove("winner")
}

p1Button.addEventListener("click", function() {
	if (gameOver) {
		return
	}

	p1Score += 1
	p1ScoreText.textContent = p1Score
	if (p1Score === maxScore) {
		win()
		p1ScoreText.classList.add("winner")
	}
})

p2Button.addEventListener("click", function() {
	if (gameOver) {
		return
	}

	p2Score += 1
	p2ScoreText.textContent = p2Score
	if (p2Score === maxScore) {
		win()
		p2ScoreText.classList.add("winner")
	}
})

resetButton.addEventListener("click", function() {
	reset()
})

inputField.addEventListener("change", function() {
	maxScoreText.textContent = this.value
	maxScore = Number(this.value)
	reset()
})