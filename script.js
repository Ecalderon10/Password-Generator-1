// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCriteriaUpper = "";
var passwordCriteriaLower = "";
var passwordCriteriaNumber = "";
var passwordCriteriaCharacters = "";
var passwordLength = "";

var numbers = 1234567890;
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var characters = ".!@#$%^&*()-_[]{}|=+``~:;'?/><";

//passwordLength = Number(passwordLength);

function generatePassword() {
  passwordLength = prompt("Choose a password length of 8 to 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password needs to be atleast 8 characters");
  }
  passwordLength = Number(passwordLength);
  var addUppercase = confirm("Would you like to include uppercase characters?");
  if (addUppercase) {
    passwordCriteriaUpper = passwordCriteriaUpper + uppercase;
  }

  var addLowercase = confirm("Would you like to include lowercase characters?");
  if (addLowercase) {
    passwordCriteriaLower = passwordCriteriaLower + lowercase;
  }
  var addCharacters = confirm("Would you like to include special characters?");
  if (addCharacters) {
    passwordCriteriaCharacters = passwordCriteriaCharacters + characters;
  }
  var addNumbers = confirm("Would you like to include number?");
  if (addNumbers) {
    passwordCriteriaNumber = passwordCriteriaNumber + numbers;
  }
  if (!addCharacters && !addLowercase && !addUppercase && !addNumbers) {
    alert("At least one field Must be selected");
  }

  var result = "";
  for (var i = 0; i < passwordLength; i++) {
    result += passwordCriteriaUpper.charAt(
      Math.floor(Math.random() * passwordLength)
    );

    result += passwordCriteriaLower.charAt(
      Math.floor(Math.random() * passwordLength)
    );

    result += passwordCriteriaCharacters.charAt(
      Math.floor(Math.random() * passwordLength)
    );
    result += passwordCriteriaNumber.charAt(
      Math.floor(Math.random() * passwordLength)
    );
  }
  var slicedResult = result.slice(0, passwordLength);

  var result = slicedResult
    .split("")
    .sort(function () {
      return 0.25 - Math.random();
    })
    .join("");

  return result;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
