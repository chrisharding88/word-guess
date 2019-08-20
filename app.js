var nickChar =["tommy", "doug", "arnold", "gerald", "spongebob","patrick", "rocko", "heffer", "filbert", "helga", "angelica","eliza"];
var wins = 0;
var guesses = 10;
var lettersWrong = [];
var lettersRight = [];
var lettersGuessed =[];
var blankSpace = [];
var guessUser;
var isCompleted = false;



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
document.onkeyup = function(){

// Determines which key is pressed
    guessUser = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(guessUser);

//checks to see if the letter exists
    if (randomChar.indexOf(guessUser) > -1){
        for (var i = 0; i < randomChar.length; i++){
            if(randomChar[i] === guessUser) {
                blankSpace[i] === lettersRight;
                lettersRight.push(guessUser);
                console.log(lettersRight);
                document.getElementById('lettersRight').innerHTML = lettersRight; 
            }
        }
    } else {
        lettersWrong.push(guessUser);
        guesses--;
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('lettersWrong').innerHTML = lettersWrong; 

    }

}





};

startGame(); // Calls out the function


/* function endGame(){

if (guesses === -1){
    alert ("GAME OVER");
}

}

endGame(); */