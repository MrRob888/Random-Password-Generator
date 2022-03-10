# Random-Password-Generator

Unfortunately didn't finish the assignment, really struggled to get things to for the way i wanted to.

basic idea

- Have prompts and confirms to know the requirements of the password.
  - Invalid input alert user
- Run if statements to qualify the confirms
  \*generate random characters
- Use a for loop to gather random characters equivlent to user input for password length
- print result

firstly tried to create seperate arrays and call random character from each, but wasn'tsure how to combine them all.
Then looked at possible solutions and tried calling from char code, how ever i dont think the code was calling correctly.

Poblems that occured

- when trying to call the alert for invalid input, not sure why it wasn't alerting when a string was entered.
  *random characters were working when done with arrays, then switched to a different idea to streamlne the code however I'm not sure if it was working
  *not sure why random wasn't working in the new system.
- not 100% clear on how to print to html (kinda got an idea 60/40)

attampted atforst with multiople Var the switched to just character var to see if random was working correctly.

// Assignment Code first draft

// var number = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

// var capitals = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");

// var lowercase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

// var special = ("!", "#", "$", "%", "&", "(", ")", "\*", "+","-", ".", "/", ":", ";", "<", "=", ">", "?", "@");

var character = character = ("!", "#", "$", "%", "&", "(", ")", "\*", "+","-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "\_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~");

var generateBtn = document.querySelector("#generate");

const userInput = Number(window.prompt("Password Length", ""));

if (userInput === NaN) {

alert("Invalid Input " + userInput)

}

console.log (typeof userInput, userInput)

function writePassword() {

function generatePassword() {

var password = generatePassword();

for (let i = 0; i < userInput; i++) {
const randomChar = character [Math.floor(Math.random()* character.length)];
passwordText.push(String.randomChar)
}

return passwordText.join('')
}

// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// document.querySelector("#password").textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
