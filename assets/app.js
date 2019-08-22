
// Global Variables
var nickChar =["tommy", "doug", "arnold", "gerald", "spongebob","patrick", "rocko", "heffer", "filbert", "helga", "angelica","eliza"];
var guesses = 10;
var lettersWrong = [];
var lettersRight = [];
var correctLetters = 0;
var blankSpace = [];
var guessUser = [];
var isCompleted = false;
var winsCount = 0;

var tommy = document.createElement('img');
var doug = document.createElement('img');
var arnold = document.createElement('img');
var gerald = document.createElement('img');
var spongebob = document.createElement('img');
var patrick = document.createElement('img');
var rocko = document.createElement('img');
var heffer = document.createElement('img');
var filbert = document.createElement('img');
var helga = document.createElement('img');
var angelica = document.createElement('img');
var eliza = document.createElement('img');




function reset(){
    var randomChar = nickChar[Math.floor(Math.random() * nickChar.length)];

    isCompleted = false;
    correctLetters = 0;
    guesses = 10;
    lettersWrong = [];
    lettersRight = [];

}



function startGame (){

//Picks the random Nick characters from the array
randomChar = nickChar[Math.floor(Math.random() * nickChar.length)];
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



function pics(){
    if (randomChar === nickChar[0]){
        tommy.src = "assets/images/tommy.jpg";
        tommy.style.width = "300px";
        tommy.style.height = "300px";
        document.getElementById('pic').innerHTML = tommy;
    } else if (randomChar === nickChar[1]){
        doug.src = "assets/images/doug.jpg";
        doug.style.width = "300px";
        doug.style.height = "300px";
        document.getElementById("pic").innerHTML = doug;
    }else if (randomChar === nickChar[2]){
        arnold.src = "assets/images/arnold.jpg";
        arnold.style.width = "300px";
        arnold.style.height = "300px";
        document.getElementById("pic").innerHTML = arnold;
    }else if (randomChar === nickChar[3]){
        gerald.src = "assets/images/gerald.jpg";
        gerald.style.width = "300px";
        gerald.style.height = "300px";
        document.getElementById("pic").innerHTML = gerald;
    }else if (randomChar === nickChar[4]){
        spongebob.src = "assets/images/spongebob.jpg";
        spongebob.style.width = "300px";
        spongebob.style.height = "300px";
        document.getElementById("pic").innerHTML = spongebob;
    }else if (randomChar === nickChar[5]){
        patrick.src = "assets/images/patrick.jpg";
        patrick.style.width = "300px";
        patrick.style.height = "300px";
        document.getElementById("pic").innerHTML = patrick;
    }else if (randomChar === nickChar[6]){
        rocko.src = "assets/images/rocko.jpg";
        rocko.style.width = "300px";
        rocko.style.height = "300px";
        document.getElementById("pic").innerHTML = rocko;
    }else if (randomChar === nickChar[7]){
        heffer.src = "assets/images/heffer.jpg";
        heffer.style.width = "300px";
        heffer.style.height = "300px";
        document.getElementById("pic").innerHTML = heffer;
    }else if (randomChar === nickChar[8]){
        filbert.src = "assets/images/filbert.jpg";
        filbert.style.width = "300px";
        filbert.style.height = "300px";
        document.getElementById("pic").innerHTML = filbert;
    }else if (randomChar === nickChar[9]){
        helga.src = "assets/images/helga.jpg";
        helga.style.width = "300px";
        helga.style.height = "300px";
        document.getElementById("pic").innerHTML = helga;
    }else if (randomChar === nickChar[10]){
        angelica.src = "assets/images/angelica.jpg";
        angelica.style.width = "300px";
        angelica.style.height = "300px";
        document.getElementById("pic").innerHTML = angelica;
    }else if (randomChar === nickChar[11]){
        eliza.src = "assets/images/eliza.jpg";
        eliza.style.width = "300px";
        eliza.style.height = "300px";
        document.getElementById("pic").innerHTML = eliza;
    }



}









//Determines if the user win or lose
function winsLose(){
    // If the length of the string is equal to the amount of correct letters that fill up the blankspace
    if (randomChar.length === correctLetters){
        isCompleted = true;
        alert("You win!");
        pics();
        //adds up the wins after the user completes all the letters in the blankspace
        winsCount++;
        //prints out the number of wins in the HTML
        document.getElementById("wins").innerHTML = winsCount;
    } else if (guesses < 0) {
        isCompleted = false;
        alert ("You Lose!");
    }
}

//User Guesses
document.onkeyup = function(){


// Determines which key is pressed
    guessUser = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(guessUser);




//checks to see if the letter exists
    if (randomChar.indexOf(guessUser) > -1){
        for (var i = 0; i < randomChar.length; i++){
            //when the user guess numbers right
            if(randomChar[i] === guessUser) {
                blankSpace[i] = guessUser;
                lettersRight.push(guessUser);
                correctLetters++;
                winsLose();
                console.log(guessUser);
                document.getElementById("blankSpaces").innerHTML = blankSpace.join(" ");
            }
        }
    } else {
        //when the user gets the wrong letter, it is pushed into the "Wrong Letters" section.
        lettersWrong.push(guessUser); 
        // When the user gets letters wrong, it subtracts the amount of guesses.
        guesses--;
        winsLose();
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('lettersWrong').innerHTML = lettersWrong.join(" "); 

    }

}









   




   
};

startGame(); // Calls out the function
