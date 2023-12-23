// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerChar;
var upperChar;
var symbolChar;
var numChar;
var pwLength;
var userInput;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Prompts User Input for password Criteria
// I need to create a function that will prompt the user to confirm certain criteria

// parseINT is a function, parse means to break something into parts and the integer tells me I want a number value to be made out of the string that results from the prompt
function generatePassword() {
  var allChars = "";
  var result = "";

  // Define character sets based on user input
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?/{}[]";

  // Add selected character sets to allChars based on user input
  if (lowerChar) {
    allChars += lowercaseChars;
  }
  if (upperChar) {
    allChars += uppercaseChars;
  }
  if (numChar) {
    allChars += numericChars;
  }
  if (symbolChar) {
    allChars += specialChars;
  }
  for (var i = 0; i < pwLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    result += allChars[randomIndex];
  }

  return result;
}

function passwordLength() {
  pwLength = parseInt(
    window.prompt(
      " What Character Length would you like your password to be? (min:8 characters & max:128 characters) "
    )
  );
  // if password is outside of range or not a number alert invalid and recall function, if it is valid return the password length
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    window.alert("Invalid Input. Refresh Page and Try again");
    return passwordLength();
  }
  return pwLength;
}

function charTypes() {
  var choices = [
    "Include lowercase characters?",
    "Include uppercase characters?",
    "Include numeric characters?",
    "Include special characters?",
  ];
  var choiceValues = ["lowerChar", "upperChar", "numChar", "symbolChar"];

  for (index = 0; index < choices.length; index++) {
    userInput = window.confirm(choices[index]);
    window[choiceValues[index]] = userInput;
  }
}
function getCriteria() {
  pwLength = passwordLength();
  charTypes();
}

getCriteria();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
