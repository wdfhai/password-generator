// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lC = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(lC);
var uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(uC);
var n = "0123456789".split("");
console.log(n);
var s = ("!@#$%&").split("");
console.log(s);
var lCuC = lC.concat(uC);
console.log(lCuC);
var lCn = lC.concat(n);
var lCs = lC.concat(s);
var uCn = uC.concat(n);
var uCs = uC.concat(s);
var ns = n.concat(s);
var lCuCs = lCuC.concat(s);
var lCuCn = lCuC.concat(n);
var lCns = lCn.concat(s);
var uCns = uCn.concat(s);
var lCuCns = lCuCs.concat(n);

var range = [];
for (var i = 8; i <= 128; i++) {
    range.push(i);
}
console.log(range);

alert("Welcome to the Employee Password Generator.");
alert("This web application will generate a random password between 8 and 128 characters long.")
alert("Follow the prompts to choose conditions for your password.");
alert("Use Copy/Paste to use the password of your choice.");
alert("Use a secure method, such as a password manager, to store your passwords.");

var wantLowerCase = confirm("Press OK to include Lowercase letters");
var wantUpperCase = confirm("Press OK to include Uppercase letters.");
var wantNumbers = confirm("Press OK to include numeric characters.");
var wantSpecial = confirm("Press OK to include the following special characters only. '!@#$%&'");

var total = prompt("How many characters do you require? Choose between 8 and 128.");
var totalInt= parseInt(total);

if (range.includes(totalInt)) {
  alert("Thanks for your input. Press Generate to create your password.");
  
  var rL = Math.floor(26 * Math.random());
  var rU = Math.floor(26 * Math.random());
  var rN = Math.floor(10 * Math.random());
  var rS = Math.floor(6 * Math.random());
  console.log(rU);
  console.log(rL);
  console.log(rN);
  console.log(rS);

  console.log(lC[rL]);
  console.log(uC[rU]);
  console.log(n[rN]);
  console.log(s[rS]);

  var password = [];
  password.length = totalInt;
  for (var i=8; i <= totalInt; i++) {
    password.push(lC[rL]);
  }
  console.log(password);
  
  
} 







