var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.jpg",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.jpg",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.jpg",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.jpg",
	} 
];

var cardInPlay = [];

var checkForMatch = function() {
	if (cardInPlay[0] === cardInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again")
		}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	cardInPlay.push(cards[cardId].rank)

	if (cardInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);