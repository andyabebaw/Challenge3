// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//generates random lowercase letter
function generateLowerCase(){ 
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  return characters.charAt(Math.floor(Math.random() * characters.length));  
}

//generates random uppercase letter
function generateUpperCase(){ 
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return characters.charAt(Math.floor(Math.random() * characters.length));  
}

//generates random number
function generateNumber(){
  var numbers = '0123456789';
  return numbers.charAt(Math.floor(Math.random() * numbers.length));  
}

//generates random special character
function generateSpecialCharacter(){
  var specialCharacters = '!@#$%^&*()_-{[}]|\:"<,>.?/';
  return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
