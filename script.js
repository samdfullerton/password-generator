// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(){
  var length = prompt("Enter Password Length (between 8-128 characters)");
  while (length < 8 || length > 128){
     length = prompt("Enter Password Length (between 8-128 characters)");
  }
 var lowercase = confirm("Lowercase characters?");
 var uppercase = confirm ("Uppercase characters?");
 var digits = confirm ("Digits?");
 var special = confirm ("Special characters?");
 while (!lowercase && !uppercase && !digits && !special){
   alert("must choose at least one criteria");
   lowercase = confirm("Lowercase characters?");
   uppercase = confirm ("Uppercase characters?");
   digits = confirm ("Digits?");
   special = confirm ("Special characters?");
 }
 var password = "";
 var allchars = "";
 if (lowercase){
   allchars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase){
    allchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(digits){
    allchars += "0123456789";
  }
  if(special){
    allchars += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  for (var i = 0; i < length; i++){
    password += allchars [Math.floor(Math.random()* allchars.length)];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
