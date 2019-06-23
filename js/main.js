// Retrieve and store button element
var button = document.getElementsByTagName("button")[0];

// Create new paragraph placeholder element and append in generator-results section
var randomLunchItem = document.createElement("p");
var placeholderSection = document.getElementById("generator-results");
placeholderSection.appendChild(randomLunchItem);

// Create new empty text node and append to placeholder element
var placeholderText = document.createTextNode("");
randomLunchItem.appendChild(placeholderText);