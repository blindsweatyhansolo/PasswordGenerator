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
var upperCaseChar;
var lowerCaseChar;

var passLength = function() {
    var passwordLength = prompt("How many characters would you like your password to be?");

    if (isNaN(passwordLength)) {
        alert("Password length must be an integer (number)");
        passLength();
    } else if (passwordLength > 128 || passwordLength < 8) {
        alert("Password length must be between 8 and 128 characters.");
    } else {
        return passwordLength;
    }
}

console.log(passLength);


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