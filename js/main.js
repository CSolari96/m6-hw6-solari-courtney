// Retrieve and store button element
var button = document.getElementsByTagName("button")[0];

// Create new paragraph placeholder element and append in generator-results section
var randomLunchItem = document.createElement("p");
var placeholderSection = document.getElementById("generator-results");
placeholderSection.appendChild(randomLunchItem);

// Create new empty text node and append to placeholder element
var placeholderText = document.createTextNode("");
randomLunchItem.appendChild(placeholderText);

// Create array of Lunch Choices
var lunchChoices = [
	"Cheeseburger", 
	"Hot Dog", 
	"Fried Chicken", 
	"Spagetti", 
	"Ceasar Salad", 
	"Fettuccine Alfredo", 
	"Fish and Chips",
	"Sub Sandwich",
	"Tacos",
	"Quesadilla",
	"Pizza",
	"Sushi"
]

// Displays Random Lunch Choice when Invoked
function randomLunchSelection() {

	// Randomly sort lunch choices
	lunchChoices.sort(function(a, b){return 0.5 - Math.random()});

	// Add random lunch choice to placeholder element
	var randomSelection = document.createTextNode(lunchChoices[0]);
	randomLunchItem.appendChild(randomSelection);

	// Hide button
	var buttonSection = document.getElementById("generator-button");
	buttonSection.removeChild(button);
}

// Invoke randomLunchSelection() when the button is clicked
button.addEventListener("click", randomLunchSelection);