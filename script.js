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
var uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var n = "0123456789".split("");
var s = ("!@#$%&").split("");
var lCuC = lC.concat(uC);
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

var range = [];
for (var i = 8; i <= 128; i++) {
    range.push(i);
}
console.log(range);
console.log(range[120]);

alert("Welcome to the Employee Password Generator.");
alert("This web application will generate a random password between 8 and 128 characters long.")
alert("Follow the prompts to choose conditions for your password.");
alert("Use Copy/Paste to use the password of your choice.");
alert("Use a secure method, such as a password manager, to store your passwords.");

var wantLowerCase = confirm("Press OK to include Lowercase letters");
var wantUpperCase = confirm("Press OK to include Uppercase letters.");
var wantNumbers = confirm("Press OK to include numeric characters.");
var wantSpecial = confirm("Press OK to include the following special characters only. '!@#$%&'");

if ((wantLowerCase) && (wantUpperCase) && (wantNumbers) && (wantSpecial)) {
  var chosenArray = lCuCns;
  console.log(chosenArray);
} else if ((wantLowerCase) && (wantUpperCase) && (wantNumbers)) {
  var chosenArray = lCuCn;
  console.log(chosenArray);
} else if ((wantLowerCase) && (wantUpperCase) && (wantSpecial)) {
  var chosenArray = lCuCs;
  console.log(chosenArray);
} else if ((wantLowerCase) && (wantNumbers) && (wantSpecial)) {
  var chosenArray = lCns;
  console.log(chosenArray);
} else if ((wantUpperCase) && (wantNumbers) && (wantSpecial)) {
  var chosenArray = uCns;
  console.log(chosenArray);
} else if ((wantLowerCase) && (wantUpperCase)) {
  var chosenArray = lCuC;
  console.log(chosenArray);
} else if ((wantLowerCase) && (wantSpecial)) {
  var chosenArray = lCs;
  console.log(chosenArray);
} else if ((wantNumbers) && (wantSpecial)) {
  var chosenArray = ns;
  console.log(chosenArray);
} else if ((wantLowerCase) && (wantNumbers)) {
  var chosenArray = lCn;
  console.log(chosenArray);
} else if ((wantUpperCase) && (wantNumbers)) {
  var chosenArray = uCn;
  console.log(chosenArray);
} else if ((wantUpperCase) && (wantSpecial)) {
  var chosenArray = uCs;
  console.log(chosenArray);
}  else if (wantLowerCase) {
  var chosenArray = lC;
  console.log(chosenArray);
}  else if ((wantUpperCase)) {
  var chosenArray = uC;
  console.log(chosenArray);
}  else if (wantNumbers) {
  var chosenArray = n;
  console.log(chosenArray);
}  else if (wantSpecial) {
  var chosenArray = s;
  console.log(chosenArray);
}  else {
  alert("A password cannot be generated without at least one set of characters.")
  console.log("No Array Chosen");
};

var total = prompt("How many characters do you require? Choose between 8 and 128.");
var totalInt= parseInt(total);

if (range.includes(totalInt)) {
  alert("Thanks for your input. Press Generate to create your password.");

  var pw = [];
  while (pw.length !== totalInt) {
    // function generate1(){
    var rn = Math.floor(Math.random() * chosenArray.length);
    console.log(rn);
    console.log(chosenArray[rn]);
    pw.push(chosenArray[rn]);

    }
  
} else {
  alert("That is not a valid choice.")
};
console.log(pw);
var password = pw.join("");
console.log(password);
alert("Your password is " + password);









