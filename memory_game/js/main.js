var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];

var checkForMatch = function() {
	if (cardInPlay[0] === cardInPlay[1]) {
			alert("You found a match!")
		} else {
			alert("Sorry, try again")
		}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);

	cardInPlay.push(cards[cardId])

	if (cardInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);