var nickChar =["tommy", "doug", "arnold", "gerald", "spongebob","patrick", "rocko", "heffer", "filbert", "helga", "angelica","eliza"];
var wins = 0;
var guesses = 10;
var lettersWrong = [];
var guessUser;

//Picks the random Nick characters from the array
var randomChar = nickChar[Math.floor(Math.random() * nickChar.length)];
console.log(randomChar);




//User Guesses

document.onkeyup = function(event){
    guessUser = event.key.toLocaleUpperCase;
}