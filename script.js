
//selectable characters 
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["@", "#", "$", "$", "%", "^", "&", "*", "-", "_", "+", "=", "<" ,">","/", ";", ":", "?", "!"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
// varibles used in functions that I wanted to make global for use in a few functions
var placementArray = [];
var finalPassword = "";

//recives and outputs slider values
var total = document.getElementById("totalRange");
var totalOutput = document.getElementById("total_number");
totalOutput.innerHTML = total.value;
total.oninput = function() {
  totalOutput.innerHTML = this.value;
}
var upperNumber = document.getElementById("upperRange"); 
var upperOutput = document.getElementById("upper_number");
upperOutput.innerHTML = upperNumber.value;
upperNumber.oninput = function() {
  upperOutput.innerHTML = this.value;
}
var symbolNumber = document.getElementById("symbolsRange");
var symbolOutput = document.getElementById("symbols_number");
symbolOutput.innerHTML = symbolNumber.value;
symbolNumber.oninput = function() {
  symbolOutput.innerHTML = this.value;
}
var numberNumber = document.getElementById("numbersRange");
var numberOutput = document.getElementById("numbers_number");
numberOutput.innerHTML = numberNumber.value;
numberNumber.oninput = function() {
  numberOutput.innerHTML = this.value;
}
var placementPicker = function() {
  //creates an array with exactly as many of each type of charcter is chosen
  var numberArray = []; 
  for (x=0; x< (total.value -upperNumber.value-symbolNumber.value-numberNumber.value); x++) {
    numberArray.push("l")
    
  }
  for (y=0; y < upperNumber.value; y++) {
    numberArray.push("u")
  }
  for (z=0; z < symbolNumber.value; z++) {
    numberArray.push("s")
  }
  for (k=0; k < numberNumber.value; k++){
    numberArray.push("n")
  }
  // randomizes list of characters
  for (l=0; l < total.value; l++) {
    var n = Math.floor(Math.random() * numberArray.length);
    placementArray.push(numberArray[n]);

    numberArray.splice(n,1);  
  }
}
var passwordReset = function() {
  finalPassword -= finalPassword;
  finalPassword = "" ;
}


var finalPasswordGenerator = function() {
  placementPicker();
  
  for (i=0; i< total.value; i++ ){
    if (placementArray[i] === "l"){
      finalPassword += lower[Math.floor(Math.random() * lower.length)]

    }
    else if (placementArray[i] === "u"){
      finalPassword += upper[Math.floor(Math.random() * upper.length)]
    }
    else if (placementArray[i] === "s"){
      finalPassword += symbols[Math.floor(Math.random() * symbols.length)]
    } 
    else {
      finalPassword += numbers[Math.floor(Math.random() * numbers.length)]
    }  
  }

}
var arrayReset = function() {
  placementArray.length= 0;
}
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  

  if (total.value < parseInt(upperNumber.value)+parseInt(symbolNumber.value)+parseInt(numberNumber.value)) {
    passwordText.value = "Password Length too small"
  }
  else {
  arrayReset();
  passwordReset();
  finalPasswordGenerator();

  
  
  passwordText.value = finalPassword;
  
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

