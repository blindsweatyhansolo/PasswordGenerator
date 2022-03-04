/** Criteria
 * password length (prompt, 8-128 characters)
 * special characters (confirm)
 * integers (confirm, validate if NaN)
 * uppercase (confirm)
 * lowercase (confirm)
 */
// Assignment code here

var specialChar;
var numbers;
var uppercaseChar;
var lowercaseChar;

// console.log(passwordLength);

var buildString = function()  {
  
  var characters = "";
  
  specialChar = window.confirm("Would you like to use special characters?");
  if (specialChar) {
    characters += "!\"#$%&()*+,-./:;<=>?@[\\]^_{|}~";
  }
    
  numbers = window.confirm("Would you like to use numbers?");
  if (numbers) {
    characters += "0123456789";
  }

  uppercaseChar = window.confirm("Would you like to allow uppercase characters?");
  if (uppercaseChar) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  lowercaseChar = window.confirm("Would you like to allow lowercase characters?");
  if (lowercaseChar) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  } 

  return characters;

}


var generatePassword = function() {
  var passwordLength = window.prompt("How many characters do you want your password to be?");
  
  do {
    window.alert("Password length must be an integer (number) between 8 and 128.");
    passwordLength = window.prompt("How many characters do you want your password to be?");
  } while (passwordLength > 128 || passwordLength < 8 || isNaN(passwordLength));

  var characters = buildString();

  do {
    window.alert("YOU MUST CHOOSE AT LEAST ONE.");
    characters = buildString();
  }
  while (characters == "");

  var result = "";
  var charactersLength = characters.length;
  for ( var i = 0; i < passwordLength; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);