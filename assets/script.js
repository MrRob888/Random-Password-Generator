
var passwordText = document.querySelector("#password");

var generateBtn = document.querySelector("#generate");


let userInput = Number (prompt("How long should your password be? (Min 8 TpasswordText Max 128 TpasswordText"));
let uppercase = confirm("Do you want Capital letters?");
// let lowercase = confirm ("Do you want Lower case letters")
let numbers = confirm("Do you want numbers?");
let special = confirm("Do you want symbols?");

if (userInput === NaN || userInput < 8) {

 alert("Invalid Input " + userInput)

}

console.log (userInput +  " " + typeof userInput);

if (uppercase === true){
    uppercase = includeUppercase;
}
if (numbers === true){
    numbers = includeNumbers;
}
if (special === true){
   special = includeSpecial;
}

console.log (uppercase);
console.log (special);
console.log (numbers);
console.log (lowercase);

var includeUppercase = arrayrandom (65, 90);
var includeNumbers = arrayrandom (48, 57);
var includeSpecial = arrayrandom (33, 47);
var includeLowercase = arrayrandom (97, 122);

function arrayrandom (low, high) {
    const array = []
for (let i = low; i <= high ; i++) {
array.push(i);
}
return array
}

console.log (includeUppercase);
console.log (includeNumbers);
console.log (includeSpecial);
console.log (includeLowercase);



function writePassword() {

    function generatePassword(includeUppercase, includeNumbers, includeSpecial, includeLowercase) {

    let characters = includeLowercase
    if (includeSpecial) characters = characters.concat(includeSpecial);
    if (includeNumbers) characters = characters.concat(includeNumbers);
    if (includeUppercase) characters = characters.concat(includeUppercase);

    const passwordText = []

    for (let i = 0; i < userInput; i++) {
      const passwordText = characters[Math.floor(Math.random() * characters.length)]
      passwordText.push(String.fromCharCode(characters))
    }
    console.log (passwordText)
    return passwordText.join("")
}
    password = generatePassword
console.log (passwordText)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);