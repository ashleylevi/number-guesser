// the number that the user guesses in text field
var userGuessInput = document.querySelector('.guess-input');
// the submit button
var guessButton = document.querySelector('#guess-button');
// the clear button
var clearButton = document.querySelector('#clear-button');
// the reset button
var resetButton = document.querySelector('#reset-button');
// display user guess
var displayGuess = document.querySelector('.display-guess');
// display guess feedback
var guessFeedback = document.querySelector('.guess-feedback');
// minimum input field
var minButton = document.querySelector('#min-button');
// maximum input field
var maxButton = document.querySelector('#max-button')
// minimum value entered by user and converted to an integer
var min = parseInt(document.querySelector('#min-button').value);
// max value entered by user and converted to an integer
var max = parseInt(document.querySelector('#max-button').value);
// display min/max feedback
var minMaxFeedback = document.querySelector('.min-max-feedback');
// random value generated based on min/max input
var randomNumber = randomNumberGenerator();
console.log('random number is ' + randomNumber);

// event listeners
userGuessInput.addEventListener('keyup', enableButtons);
guessButton.addEventListener('click', checkUserGuess);
clearButton.addEventListener('click', clearGuess);
resetButton.addEventListener('click', resetGuess);
minButton.addEventListener('keyup', updateMinValue);
maxButton.addEventListener('keyup', updateMaxValue);

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
  min = Math.ceil(min);
  max = Math.floor(max);
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
    minMaxFeedback.innerText = "Your guess was";

      if ((isNaN(userGuessInteger)) === true ) {
      guessFeedback.innerText = "Please enter a numerical value!";
    } else if (userGuessInteger === randomNumber) {
      minMaxFeedback.innerText = "BOOM!";
      min -=  10;
      max +=  10;
      guessFeedback.innerText = `Now guess a number between ${min} and ${max}`;
      randomNumber = randomNumberGenerator();
      console.log('New random number is ' + randomNumber);      
    } else if (userGuessInteger < randomNumber && userGuessInteger >= min ) {
      guessFeedback.innerText = "That is too low";
    } else if (userGuessInteger > randomNumber && userGuessInteger <= max) {
      guessFeedback.innerText = "That is too high";
    } else {
      guessFeedback.innerText = "Please enter a number within range!";
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
  console.log('im working')
  document.querySelector('.reset').reset();
  userGuessInput.value = '';
  guessFeedback.innerText = 'The random number';
  minMaxFeedback.innerText = 'What is';
  displayGuess.innerText = '?'; 
  randomNumber = randomNumberGenerator();
  console.log('New random number is ' + randomNumber); 
};


