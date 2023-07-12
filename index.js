const magicNumber = Math.floor(Math.random() * 100) + 1;


function checkGuess() {
  const guessedNumber = parseInt(document.getElementById("guess").value);
  const resultElement = document.getElementById("result");
  if(magicNumber > 50) {
    var popup = resultElement.textContent = "Hint :The Number is greater than 50";
    alert(popup);
  } else{
    var popup1 = resultElement.textContent = "Hint : The Numbers is less than 50";
    alert(popup1);
  }

  if (guessedNumber < 1 || guessedNumber > 100) {
    alert("Please enter a number between 1 and 100."); 
  } else {
    const difference = Math.abs(guessedNumber - magicNumber);
    const percentage = Math.floor(((100 - difference) / 100) * 100);
    
    resultElement.textContent = `You are ${percentage}% close to the magic number.`;
  
    if(percentage == 100) {
      resultElement.textContent = "Congratulations";
    }
  }
}

document.getElementById("checkButton").addEventListener("click", checkGuess);
