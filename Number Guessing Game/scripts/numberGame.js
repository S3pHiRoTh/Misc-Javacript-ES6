/*
Name: Number Guessing Game
Description: Based on the tutorial from Mozilla Firefox
Language: JavaScript
*/

		// Creating variables for the game
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		
		const guesses = document.querySelector('.guesses');
		const lastResult = document.querySelector('.lastResult');
		const lowOrHi = document.querySelector('.lowOrHi');

		const guessSubmit = document.querySelector('.guessSubmit');
		const guessField = document.querySelector('.guessField');

		// tracking guess count, start with 1 as computers begin counting at 0
		let guessCount = 1;
		let resetButton;
		
		// creating the meat of the script ;-)

		guessField.focus();
		
		function checkGuess() {
			let userGuess = Number(guessField.value);
			if (guessCount === 1) {
				guesses.textContent = 'Previous guesses: ';
				}
				guesses.textContent += userGuess + ' ';
 
			if (userGuess === randomNumber) {
				lastResult.textContent = 'Congratulations! You got it right!';
				lastResult.style.backgroundColor = 'green';
				lowOrHi.textContent = '';
				setGameOver();
				}
			else if (guessCount === 10) {
				lastResult.textContent = '!!!GAME OVER!!!';
				setGameOver();
				} 
			else {
				lastResult.textContent = 'Wrong!';
				lastResult.style.backgroundColor = 'red';
				if(userGuess < randomNumber) {
					lowOrHi.textContent = 'Last guess was too low!';
					}
				else if(userGuess > randomNumber) {
					lowOrHi.textContent = 'Last guess was too high!';
					}
			}

 
			guessCount++;
			guessField.value = '';
			guessField.focus();
		}

		guessSubmit.addEventListener('click', checkGuess);
		
      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }
		
      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
		
		guessField.focus();
      }
	