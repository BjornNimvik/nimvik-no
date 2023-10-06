// Get references to the button and count elements
const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("count");

// Initialize the count
let count = 0;

// Function to increment the count and update the display
function incrementCount() {
    count++;
    countDisplay.textContent = "Trökkt: " + count;
}

// Add a click event listener to the button
countButton.addEventListener("click", incrementCount);