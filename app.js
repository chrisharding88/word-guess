var nickChar =["tommy", "doug", "arnold", "gerald", "spongebob","patrick", "rocko", "heffer", "filbert", "helga", "angelica","eliza"];
var wins = 0;
var guesses = 10;
var lettersWrong = [];
var lettersGuessed =[];
var blankSpace = [];
var guessUser;



function startGame (){

//Picks the random Nick characters from the array
var randomChar = nickChar[Math.floor(Math.random() * nickChar.length)];
//Prints out the random word on the console
console.log(randomChar);

// Sets a loop for randomChar 
for(var i = 0; i < randomChar.length; i++){
//The variable i plugs into the blankSpace array so it can show the length of random word
    blankSpace[i] = ('_');
}

//Prints out the random blank spaces on HTML
document.getElementById("blankSpaces").innerHTML = blankSpace.join(" ");
console.log(blankSpace);


//User Guesses
document.onkeyup = function(event){
    guessUser = event.key.toLowerCase;

    /* if(guessUser.indexOf(lettersGuessed) === randomChar.length){
        guessUser.push("blankSpaces");
    } else {
        guessUser.push("lettersWrong");
    } */
   


}

document.getElementById('lettersWrong').innerHTML = lettersWrong; 

console.log(guessUser);



};

startGame(); // Calls out the function