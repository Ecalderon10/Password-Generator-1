// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCriteria = "";
var passwordLength = "";

var numbers = 1234567890;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var characters = ".!@#$%^&*()-_[]{}|=+``~:;'?/><";

passwordLength = Number(passwordLength);

function generatePassword() {
  passwordLength = prompt("Choose a password length of 8 to 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password needs to be atleast 8 characters");
  } else {
    var addUppercase = confirm(
      "Would you like to include uppercase characters?"
    );
    if (addUppercase) {
      passwordCriteria = passwordCriteria + uppercase;
    }
    var addLowercase = confirm(
      "Would you like to include lowercase characters?"
    );
    if (addLowercase) {
      passwordCriteria = passwordCriteria + lowercase;
    }
    var addCharacters = confirm(
      "Would you like to include special characters?"
    );
    if (addCharacters) {
      passwordCriteria = passwordCriteria + characters;
    }
    var addNumbers = confirm("Would you like to include number?");
    if (addNumbers) {
      passwordCriteria = passwordCriteria + numbers;
    }
  }
  if (!addCharacters && !addLowercase && !addUppercase && !addNumbers);
  {
    passwordCriteria = alert("At least one field Must be selected");
  }

  var result = "";
  for (var i = 0; i < passwordLength; i++) {
    result += addLowercase.chartA(math.floor(Math.random() * passwordCriteria));

    result += addUppercase.chartA(math.floor(Math.random() * passwordCriteria));

    result += addNumbers.chartA(math.floor(Math.random() * passwordCriteria));
    result += addCharacters.chartA(
      math.floor(Math.random() * passwordCriteria)
    );
  }
  return result;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
