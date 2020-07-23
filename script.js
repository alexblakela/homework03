// Assignment Code
	var generateBtn = document.querySelector("#generate");
	var password = document.querySelector("#password");
	var passwordLetters = Array();
	var finalResult = "";

	// Values
	var ltrLowercase = "abcdefghijklmnopqrstuvwxyz";
	var ltrUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var ltrSpecial = ".+*?[^]$(){}=!<>|:-";
	var ltrNumbers = "1234567890";

// Write password to the #password input
function writePassword() {

	passwordLetters = Array();
	var finalResult = "";

	// Pull Data
	var lettersLowecase = document.querySelector("#lettersLowecase").checked;
	var lettersUppercase = document.querySelector("#lettersUppercase").checked;
	var numeric = document.querySelector("#numeric").checked;
	var spacialCharacters = document.querySelector("#spacialCharacters").checked;
	var howMany = document.querySelector("#howMany").value;
	
	console.log("lettersLowecase:  " + lettersLowecase);
	console.log("lettersUppercase:  " + lettersUppercase);
	console.log("numeric:  " + numeric);
	console.log("spacialCharacters:  " + spacialCharacters);
	console.log("howMany:  " + howMany);

	// Validation
	if (lettersLowecase == false && lettersUppercase == false && numeric == false && spacialCharacters == false)
	{
		alert("Please select at least 1 criteria");
	}
	else if (howMany < 8 || howMany > 128){
		alert("Please use between 8 and 128 characters");
	}
	else {
		// Continue with code

		if (lettersLowecase == true)
		{
			writeToArray(ltrLowercase);
		}
		if (lettersUppercase == true)
		{
			writeToArray(ltrUppercase);
		}
		if (numeric == true)
		{
			writeToArray(ltrNumbers);
		}
		if (spacialCharacters == true)
		{
			writeToArray(ltrSpecial);
		}	

		// Pull symbols for array

		for (var z = 0; z < howMany; z++) {
			rand = Math.floor(Math.random() * passwordLetters.length);
			finalResult += passwordLetters[rand];
		}

		password.innerHTML = finalResult;
	}
}

function writeToArray(x) {
	var letters = x;
	for (var i = 0; i < x.length; i++) {
		passwordLetters.push(x[i]);
	}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);