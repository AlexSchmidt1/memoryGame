const gameContainer = document.getElementById("game");

let imgDog = document.createElement("img");
imgDog.src =
	"https://www.pexels.com/photo/two-yellow-labrador-retriever-puppies-1108099/";

const COLORS = [
	"red",
	"blue",
	"green",
	"orange",
	"purple",
	"red",
	"blue",
	"green",
	"orange",
	"purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
	for (let color of colorArray) {
		// create a new div
		const newDiv = document.createElement("div");

		// give it a class attribute for the value we are looping over
		newDiv.classList.add(color);

		// call a function handleCardClick when a div is clicked on
		newDiv.addEventListener("click", handleCardClick);

		// append the div to the element with an id of game
		gameContainer.append(newDiv);
	}
}
// when the DOM loads
createDivsForColors(shuffledColors);

let clickCount = 0;
let cardOne;
let cardTwo;
let currentCard;
let timerActive = false;
let cardsFlipped = 0;
// TODO: Implement this function!
function handleCardClick(event) {
	// you can use event.target to see which element was clicked
	console.log("you just clicked", event.target);
	console.log("enter handleCardClick clickCount: " + clickCount);

	if (cardOne !== event.target) {
		if (!timerActive) {
			if (clickCount === 0) {
				cardOne = event.target;
				console.log("cardOne " + cardOne);
				event.target.style.backgroundColor = event.target.getAttribute("class");
				clickCount++;
				currentCard = cardOne;
				if (1 === 1) {
				}
			} else if (clickCount === 1) {
				cardTwo = event.target;
				console.log("cardTwo " + cardTwo);
				event.target.style.backgroundColor = event.target.getAttribute("class");

				setTimeout(compareCards, 1500);
				timerActive = true;
			}
		}
	} else {
		alert("You cannot pick the same card twice!");
	}
}

function compareCards() {
	console.log("Comparing cards");
	if (cardOne.getAttribute("class") !== cardTwo.getAttribute("class")) {
		cardOne.style.backgroundColor = "";
		cardTwo.style.backgroundColor = "";
		clickCount = 0;
	} else {
		clickCount = 0;
		cardsFlipped += 2;
		cardOne.removeEventListener("click", handleCardClick);
		cardTwo.removeEventListener("click", handleCardClick);
	}
	cardOne = null;
	cardTwo = null;
	timerActive = false;

	if (cardsFlipped === COLORS.length) alert("game over!");
}

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", function (e) {
	const allDivs = document.querySelectorAll("div");

	// for (let resetDiv of allDivs) {
	// 	resetDiv.remove();
	// }

	// shuffledColors = shuffle(COLORS);

	// createDivsForColors(shuffledColors);
	document.location.reload(false);
});
