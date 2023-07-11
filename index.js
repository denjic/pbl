// Generate a random magic number between 1 and 100
const magicNumber = Math.floor(Math.random() * 100) + 1;

// Function to check if the guessed number matches the magic number
function checkGuess() {
  // Get the guessed number from the input field
  const guessedNumber = parseInt(document.getElementById("guess").value);

  // Get the result element to display the outcome
  const resultElement = document.getElementById("result");

  // Check if the guessed number matches the magic number
  if (guessedNumber === magicNumber) {
    resultElement.textContent = "Congratulations! You found the magic number!";
  } else if (guessedNumber > magicNumber) {
    resultElement.textContent = "Too high. Try again!";
  } else {
    resultElement.textContent = "Too low. Try again!";
  }
}

// Attach the checkGuess function to the guess button's click event
document.getElementById("checkButton").addEventListener("click", checkGuess);