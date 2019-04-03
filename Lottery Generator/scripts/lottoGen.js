/*
Script Name: lottoGen.js
Description: A simple lottery generator using the Math library
Project Start Date: 21/03/19
Author: A.Taylor
Language: JavaScript
*/

// Grab the text field element
let userInput = document.getElementById('userInput').value;

// variable to reference the HTML element to apply the lotto results to
let logSlips = document.getElementById('slipResults');

// max amount of slips that can be generated, there's not really any need for this, but this is to safeguard the user, so the website doesn't crash their PC by entering something daft like a million slips...
const maxSlips = 100;

// Create an empty generatedNumbers to store our numbers. We can also use this same generatedNumbers to check this against the random generated number so we do not generate duplicate numbers.
let generatedNumbers = [];

// Create lottoResults as a global variable so our other functions can access it

function SpecifySlips(){
	let stopGenerating = 0;
	console.log("button clicked");
	
	// loop catches the amount of slips the user has requested and compares it to the stop generating variable, for each iteration where the variable does not match, 
	// it will continue to increment stopGenerating until they both match, then exiting the loop
	for(i = document.getElementById('userInput').value; i != stopGenerating; stopGenerating++){
			GenerateSlips();
	}
	
}

function GenerateSlips(){
	while(generatedNumbers.length < 6){
				
		// Randomly generate our lottery numbers, using math.random. This is also declared inside the loop as math.random will assign a different number each iteration.
		let lottoNumReg = Math.floor(Math.random() *59) +1;
				
		// Checking for duplicate numbers, if duplicate numbers are found, let's pop them out of the generatedNumbers until there aren't any. Putting this at the top so that it is the first thing that get's parsed in the loop
		// Basically we are saying here is if the lotto number that has been generated matches any one in the array, delete the dupe from the array. Another number has not been pushed to the array while in the conditional block, 
		// as I want the loop to keep iterating until there are no dupes.
			
		if(lottoNumReg === generatedNumbers[0]){
			// outputting the matching dupe numbers to the console
			console.log(`Duplicate found. Lotto number that was generated: ${lottoNumReg} matches ${generatedNumbers[0]}`);
			generatedNumbers.shift();
		}
		else if(lottoNumReg === generatedNumbers[1]){
			console.log(`Duplicate found. Lotto number that was generated: ${lottoNumReg} matches ${generatedNumbers[1]}`);
			generatedNumbers.splice(1);
		}
		else if(lottoNumReg === generatedNumbers[2]){
			console.log(`Duplicate found. Lotto number that was generated: ${lottoNumReg} matches ${generatedNumbers[2]}`);
			generatedNumbers.splice(2);
		}
		else if(lottoNumReg === generatedNumbers[3]){
			console.log(`Duplicate found. Lotto number that was generated: ${lottoNumReg} matches ${generatedNumbers[3]}`);
			generatedNumbers.splice(3);
		}
		else if(lottoNumReg === generatedNumbers[4]){
			console.log(`Duplicate found. Lotto number that was generated: ${lottoNumReg} matches ${generatedNumbers[4]}`);
			generatedNumbers.splice(4);
		}
		else if(lottoNumReg === generatedNumbers[5]){
			console.log(`Duplicate found. Lotto number that was generated: ${lottoNumReg} matches ${generatedNumbers[5]}`);
			generatedNumbers.pop();
		}
			
		// once the dupe check has been done (the conditional if statements above in the loop should take care of this dynamically now) and push the number to the array and store it
		// assign the random generated number to the generatedNumbers
			
		generatedNumbers.push(lottoNumReg);
			
	}

		
		// outputting the result to the console so we can cross reference this with the actual output on the website
		console.log(generatedNumbers);
			
		// Now that the loop has finished, let's output some meaningful data to the user <3
		
		let lottoResults = createSlipElement(`Your lucky numbers are: ${generatedNumbers[0]}, ${generatedNumbers[1]}, ${generatedNumbers[2]}, ${generatedNumbers[3]}, ${generatedNumbers[4]} and ${generatedNumbers[5]}`);
		
		// Since the output has already been displayed, let's reset the variable 
		generatedNumbers = [];

	
}
// function to create some new baby elements and append them to the website dynamically.

function createSlipElement(lottoResults){
	// create a paragraph element
	let slipBlock = document.createElement("P");
	slipBlock.innerHTML = lottoResults;
	document.body.appendChild(slipBlock);
	
}