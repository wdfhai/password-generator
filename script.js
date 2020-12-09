



var generateBtn = document.querySelector("#generate");

function writePassword() {


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
  
  var range = [];
  for (var i = 8; i <= 128; i++) {
      range.push(i);
  }
  
  
  alert("Welcome to the Employee Password Generator.");
  alert("This web application will generate a random password between 8 and 128 characters long.")
  alert("Follow the prompts to choose conditions for your password.");
  alert("Use Copy/Paste to use the password of your choice.");
  alert("Use a secure method, such as a password manager, to store your passwords.");
  
  
  var chosenArray = "";
  while (chosenArray == ""){
  var wantLowerCase = confirm("Press OK to include Lowercase letters");
  var wantUpperCase = confirm("Press OK to include Uppercase letters.");
  var wantNumbers = confirm("Press OK to include numeric characters.");
  var wantSpecial = confirm("Press OK to include the following special characters only. '!@#$%&'");
  
  if ((wantLowerCase) && (wantUpperCase) && (wantNumbers) && (wantSpecial)) {
    var chosenArray = lCuCns;
  } else if ((wantLowerCase) && (wantUpperCase) && (wantNumbers)) {
    var chosenArray = lCuCn;
  } else if ((wantLowerCase) && (wantUpperCase) && (wantSpecial)) {
    var chosenArray = lCuCs;
  } else if ((wantLowerCase) && (wantNumbers) && (wantSpecial)) {
    var chosenArray = lCns;
  } else if ((wantUpperCase) && (wantNumbers) && (wantSpecial)) {
    var chosenArray = uCns;
  } else if ((wantLowerCase) && (wantUpperCase)) {
    var chosenArray = lCuC;
  } else if ((wantLowerCase) && (wantSpecial)) {
    var chosenArray = lCs;
  } else if ((wantNumbers) && (wantSpecial)) {
    var chosenArray = ns;
  } else if ((wantLowerCase) && (wantNumbers)) {
    var chosenArray = lCn;
  } else if ((wantUpperCase) && (wantNumbers)) {
    var chosenArray = uCn;
  } else if ((wantUpperCase) && (wantSpecial)) {
    var chosenArray = uCs;
  }  else if (wantLowerCase) {
    var chosenArray = lC;
  }  else if ((wantUpperCase)) {
    var chosenArray = uC;
  }  else if (wantNumbers) {
    var chosenArray = n;
  }  else if (wantSpecial) {
    var chosenArray = s;
  }  else {
    alert("A password cannot be generated without at least one set of characters.")
  };
  };
  
  var totalInt = 1;

  while (!(range.includes(totalInt))) {
    var total = prompt("How many characters do you require? Choose between 8 and 128.");
    var totalInt= parseInt(total);
  
    if (range.includes(totalInt)) {
      alert("Thanks for your input. Generating password below.");
  
      var pw = [];
      while (pw.length !== totalInt) {
        var rn = Math.floor(Math.random() * chosenArray.length);
        pw.push(chosenArray[rn]);
        }
    } else {
      alert("That is not a valid choice.")
  };
  };
  
  var password1 = pw.join("");
  // alert("Your password is " + password1);

  var x = document.querySelector("#password");
  x.innerHTML = password1;
}

generateBtn.addEventListener("click", writePassword);