// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
  confirmRules = alert("Password Rules: \n-length of at least 8 characters and no more than 128 characters \n" + 
  "-may contains lowercase, uppercase, numeric, and/or special characters\n Respond 'OK' to continue.");

  
  var charCount;
  var response;
  // checks if input is a number and between 8 and 128
  while (((charCount < 8 || charCount > 128 || typeof charCount !== "number" || isNaN(charCount)))){
    response = prompt("Please enter how many characters you want your password to have")
    if(response === null) break;
    charCount = parseInt(response);
  }
  if(response === null) return "Your Secure Password";

  var containsUpperCase = "";
  var containsLowerCase = "";
  var containsSpecialChars = "";
  var containsNumbers = "";

  // Do While repeats if all are false
  do {
    // checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsUpperCase)){
      containsUpperCase = prompt("Would you like your password to contain Upper Case Letters ('true' or 'false')");
    }
    containsUpperCase = containsUpperCase.toString().toLowerCase() === "true";
  
    // checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsLowerCase)){
      containsLowerCase = prompt("Would you like your password to contain Lower Case Letters ('true' or 'false')");
    }
    containsLowerCase = containsLowerCase.toString().toLowerCase() === "true";
  
    // checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsSpecialChars)){
      containsSpecialChars = prompt("Would you like your password to contain special characters ('true' or 'false')");
    }
    containsSpecialChars = containsSpecialChars.toString().toLowerCase() === "true";
  
    // checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsNumbers)){
      containsNumbers = prompt("Would you like your password to contain numbers ('true' or 'false')");
    }
    containsNumbers = containsNumbers.toString().toLowerCase() === "true";
  } while( !containsUpperCase && !containsLowerCase && !containsSpecialChars && !containsNumbers);
  

  var password = generatePass(charCount,containsUpperCase,containsLowerCase,containsSpecialChars,containsNumbers);
  return password;
}

function generatePass(characterCount, containsUpperCase, containsLowerCase, containsSpecialChars, containsNumbers){
  
  var password = "";
  var validChars = setValidCharsArray(containsUpperCase, containsLowerCase, containsSpecialChars, containsNumbers);
  
  while(password.length < characterCount){
    // Generates a random character type from validChars array of selected valid character types
    var randomType = Math.floor(Math.random() * validChars.length);
      switch (validChars[randomType]) {
        case "upperCase":
          // generates a random character of specefic type, in this case UpperCase letters
          password+=generateUpperCase();
          // removes character type from array to increase probability that other types are selected next
          validChars = removefromArray(validChars, "upperCase");
          break;
        case "lowerCase":
          password+=generateLowerCase();
          validChars = removefromArray(validChars, "lowerCase");
          break;
        case "special":
          password+=generateSpecialCharacter();
          validChars = removefromArray(validChars, "special");
          break;
        case "number":
          password+=generateNumber();
          validChars = removefromArray(validChars, "number");
          break;
      }
      // valid chars is 0 when all valid character types have been used. 
      // Reset the valid char array again to allow characters to be reused
      // Without this removal process there is no guarantee that each char type is include, randomoninty could skip a type
      if (validChars.length == 0){
        validChars = setValidCharsArray(containsUpperCase, containsLowerCase, containsSpecialChars, containsNumbers);
      }
  }
  return password;
}

// fills char array with selected char types
function setValidCharsArray(containsUpperCase, containsLowerCase, containsSpecialChars, containsNumbers){
  var validChars = []
  if(containsUpperCase){
    validChars.push("upperCase"); 
  }
  if(containsLowerCase){
    validChars.push("lowerCase");
  }
  if(containsSpecialChars){
    validChars.push("special");
  }
  if(containsNumbers){
    validChars.push("number");
  }
  return validChars;
}

function removefromArray(array, toRemove){
  array = array.filter(function(item) {
    return item !== toRemove
  })
return array;
}

// checks if resonse is true or false ignoring casing
function checkIfValidTrueOrFalse(response){
  return response.toString().toLowerCase()  != "true" && response.toString().toLowerCase()  != "false";
}

// generates random lowercase letter
function generateLowerCase(){ 
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  return characters.charAt(Math.floor(Math.random() * characters.length));  
}

// generates random uppercase letter
function generateUpperCase(){ 
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return characters.charAt(Math.floor(Math.random() * characters.length));  
}

// generates random number
function generateNumber(){
  var numbers = '0123456789';
  return numbers.charAt(Math.floor(Math.random() * numbers.length));  
}

// generates random special character
function generateSpecialCharacter(){
  var specialCharacters = '!@#$%^&*()_-{[}]|\:"<,>.?/';
  return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
