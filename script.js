// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lowerCase);
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(upperCase);
var numbers = "1234567890".split("");
console.log(numbers);
var special = ("!@#$%&").split("");
console.log(special);

var range = [];
for (var i = 8; i <= 128; i++) {
    range.push(i);
}
console.log(range);

alert("Welcome to the Employee Password Generator.");
alert("This web application will create a random password between 8 and 128 characters long.")
alert("Follow the prompts to choose conditions for your password.");
alert("Use Copy/Paste to use the password of your choice.");
alert("Use a secure method, such as a password manager, to store your passwords.");

var wantLowerCase = confirm("Press OK to include Lowercase letters");
var wantUpperCase = confirm("Press OK to include Uppercase letters.");
var wantNumbers = confirm("Press OK to include Numbers.");
var wantSpecial = confirm("Press OK to include the following special characters only. '!@#$%&'");

var length = prompt("How many characters do you require? Choose between 8 and 128.");
var lengthInt= parseInt(length);

if (range.includes(lengthInt)) {
  console.log(lengthInt);
} 




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


