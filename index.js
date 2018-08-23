//variables
var userGuessInput = document.querySelector('.guess-input');
var guessButton = document.querySelector('#guess-button');
var clearButton = document.querySelector('#clear-button');
var resetButton = document.querySelector('#reset-button');
var displayGuess = document.querySelector('.display-guess');
var guessFeedback = document.querySelector('.guess-feedback');
var minButton = document.querySelector('#min-button');
var maxButton = document.querySelector('#max-button');
// minimum value entered by user and converted to an integer
var min = parseInt(document.querySelector('#min-button').value);
// maximum value entered by user and converted to an integer
var max = parseInt(document.querySelector('#max-button').value);
var yourGuessWas = document.querySelector('.your-guess-was');
var minLabel = document.querySelector('#min-label');
var maxLabel = document.querySelector('#max-label');
var randomNumber = randomNumberGenerator();
console.log('random number is ' + randomNumber);
var count = 0;
var countNumber = document.querySelector('#count-number');

// event listeners
userGuessInput.addEventListener('keyup', enableButtons);
guessButton.addEventListener('click', checkUserGuess);
clearButton.addEventListener('click', clearGuess);
resetButton.addEventListener('click', resetGuess);
// minButton.addEventListener('keyup', updateMinValue);
// maxButton.addEventListener('keyup', updateMaxValue);

//enable or disable buttons
function enableButtons() {
  if (userGuessInput.value === '') {
    guessButton.disabled = true;
    clearButton.disabled = true;
    resetButton.disabled = true;
  } else {
    guessButton.disabled = false;
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
};

//generate random number based on min and max entered by user
function randomNumberGenerator() {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

//update the minimum value based on user input
function updateMinValue() {
min = parseInt(document.querySelector('#min-button').value);
console.log('min is ' + min);
randomNumber = randomNumberGenerator();
console.log('random number is ' + randomNumber);
};

//update the maximum value based on user input
function updateMaxValue() {
max = parseInt(document.querySelector('#max-button').value);
console.log('max is ' + max);
randomNumber = randomNumberGenerator();
console.log('random number is ' + randomNumber);
};

//function for user guess feedback
function checkUserGuess(event) {
  event.preventDefault();

    var userGuessInteger = parseInt(userGuessInput.value);
    displayGuess.innerText = userGuessInteger;
    yourGuessWas.innerText = 'Your guess was';

      if ((isNaN(userGuessInteger)) === true) {
      guessFeedback.innerText = 'Please enter a numerical value!';
    } else if (userGuessInteger === randomNumber) {
      yourGuessWas.innerText = "BOOM!";
      min -= 10;
      max += 10;
      guessFeedback.innerText = `Now guess a number between ${min} and ${max}`;
      randomNumber = randomNumberGenerator();
      console.log('New random number is ' + randomNumber);
      updateMaxMin();
      resetCount();   
      userGuessInput.value = ''; 
    } else if (userGuessInteger < randomNumber && userGuessInteger >= min) {
      guessFeedback.innerText = 'That is too low';
      guessCount();
    } else if (userGuessInteger > randomNumber && userGuessInteger <= max) {
      guessFeedback.innerText = 'That is too high';
      guessCount();
    } else {
      guessFeedback.innerText = 'Please enter a number within range!';
      // displayGuess.innerText = "not a number!";
    }
};

//clear input fields
function clearGuess(event) {
  event.preventDefault();
    userGuessInput.value = '';
};

//reset page
function resetGuess() {
  document.querySelector('.reset').reset();
  userGuessInput.value = '';
  guessFeedback.innerText = 'The random number';
  yourGuessWas.innerText = 'What is';
  displayGuess.innerText = '?'; 
  minLabel.innerText = 'Pick Minimum Number';
  maxLabel.innerText = 'Pick Maximum Number';
  minButton.style.display = '';
  maxButton.style.display = '';
  resetCount();
  enableButtons();
  // randomNumber = randomNumberGenerator();
  // console.log('New random number is ' + randomNumber); 
};

/* hide's min and max input fields and show's user 
the new min and max range */
function updateMaxMin() {
  minLabel = document.querySelector('#min-label');
  maxLabel = document.querySelector('#max-label');;
  var newMinLabel = minLabel.innerText = `New mimimum is ${min} and `;
  var newMaxLabel = maxLabel.innerText = `New maximum is ${max}`;
  minButton.style.display = 'none';
  maxButton.style.display = 'none';
};

//updates amount of incorrect guesses
function guessCount() {
  count++;
  console.log('guess count is ' + count);
  countNumber = document.querySelector('#count-number');
  countNumber.innerText = count;
};

//reset guess count
function resetCount() {
  count = 0;
  countNumber.innerText = count;
};


