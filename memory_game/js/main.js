var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	} 
];

var cardInPlay = [];

var score = 0;

var checkForMatch = function() {
	if (cardInPlay[0] === cardInPlay[1]) {
			alert("You found a match!");
			score += 100;
		} else {
			alert("Sorry, try again");
			score -= 20;
		}
	document.getElementById('score-tracker').innerHTML = score;
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');

	cardInPlay.push(cards[cardId].rank)

	this.setAttribute('src', cards[cardId].cardImage);

	if (cardInPlay.length === 2) {
		checkForMatch();
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		// when each card is created, we create an event listener
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

var resetCards = function() {
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
		cardInPlay.pop();
	}
};

document.getElementById('reset-button').addEventListener('click', resetCards);

var startGame = function() {
	resetCards();
	score = 0;
	document.getElementById('score-tracker').innerHTML = score;
}

document.getElementById('start-new-game').addEventListener('click', startGame);
