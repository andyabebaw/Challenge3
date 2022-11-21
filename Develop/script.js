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
 
  // checks if input is a number and between 8 and 128
  while (((charCount < 8 || charCount > 128 || typeof charCount !== "number" || isNaN(charCount)))){
    console.log(typeof charCount)
    charCount = parseInt(prompt("Please enter how many characters you want your password to have"));
  }

  var containsUpperCase = "";
  var containsLowerCase = "";
  var containsSpecialChars = "";
  var containsNumbers = "";

  // Do While repeats if all are false
  do {
    //checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsUpperCase)){
      containsUpperCase = prompt("Would you like your password to contain Upper Case Letters ('true' or 'false')");
    }
    containsUpperCase = containsUpperCase.toString().toLowerCase() === "true";
  
    //checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsLowerCase)){
      containsLowerCase = prompt("Would you like your password to contain Lower Case Letters ('true' or 'false')");
    }
    containsLowerCase = containsLowerCase.toString().toLowerCase() === "true";
  
    //checks if input is true or false ignoring casing
    while(checkIfValidTrueOrFalse(containsSpecialChars)){
      containsSpecialChars = prompt("Would you like your password to contain special characters ('true' or 'false')");
    }
    containsSpecialChars = containsSpecialChars.toString().toLowerCase() === "true";
  
    //checks if input is true or false ignoring casing
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
  var charCount = characterCount;

  //leaves room for 1 special character
  if (containsSpecialChars){
    charCount -= 1;
  }
  //leaves room for 1 number
  if (containsNumbers){
    charCount -= 1;
  }
  //generates a random character
  console.log(typeof containsLowerCase)
  
  for(var i = 0; i < charCount; i++){

    //if it contains both upper and lowercase letter generate the casing randomly
    if(containsLowerCase && containsUpperCase){
      if (Math.random() > .5){
        password += generateLowerCase()
      } else {
        password += generateUpperCase()
      } 
    } else if (containsLowerCase){
      password += generateLowerCase()
    } else if (containsUpperCase){
      password += generateUpperCase()
    }
  }

  //generates a random special character
  if(containsSpecialChars){
    if(!containsNumbers){
      //if password is not at max length, generate special characters until it is
      while(password.length < characterCount){
        password += generateSpecialCharacter();
      }
    } else {
      //if the password is supposed to contains numbers, save it space to add a number by only adding 1 char
      password += generateSpecialCharacter();
    }
    
  }

  //generates a random number
  if(containsNumbers){
    //if password is not at max length, generate numbers until it is
    while(password.length < characterCount){
      password += generateNumber();
    }
  }

  return password;
}

function checkIfValidTrueOrFalse(response){
  return response.toString().toLowerCase()  != "true" && response.toString().toLowerCase()  != "false";
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
