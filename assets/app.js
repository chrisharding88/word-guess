
// Global Variables
var nickChar = ["tommy", "doug", "arnold", "gerald", "spongebob", "patrick", "rocko", "heffer", "filbert", "helga", "angelica", "eliza"];
var guesses = 10;
var lettersWrong = [];
var lettersRight = [];
var correctLetters = 0;
var blankSpace = [];
var guessUser = [];
var isCompleted = false;
var winsCount = 0;
var instructions = document.getElementById('instructions');
var game = document.getElementsByClassName('game');
var randomChar;


// global image variables
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


//global audio variables
var correct = document.createElement('audio');
var wrong = document.createElement('audio');
 correct = new Audio ('assets/sounds/correctAnswer.mp3');
 wrong = new Audio('assets/sounds/wrongAnswer.mp3');





// Set up function to display the pictures
function pics(){
    if (randomChar === nickChar[0]){
        tommy.src = "assets/images/tommy.jpg";
        tommy.style.width = "300px";
        tommy.style.height = "300px";
        document.getElementById('pic').appendChild(tommy);
    } else if (randomChar === nickChar[1]){
        doug.src = "assets/images/doug.jpg";
        doug.style.width = "300px";
        doug.style.height = "300px";
        document.getElementById("pic").appendChild(doug);
    }else if (randomChar === nickChar[2]){
        arnold.src = "assets/images/arnold.jpg";
        arnold.style.width = "300px";
        arnold.style.height = "300px";
        document.getElementById("pic").appendChild(arnold);
    }else if (randomChar === nickChar[3]){
        gerald.src = "assets/images/gerald.jpg";
        gerald.style.width = "300px";
        gerald.style.height = "300px";
        document.getElementById("pic").appendChild(gerald);
    }else if (randomChar === nickChar[4]){
        spongebob.src = "assets/images/spongebob.jpg";
        spongebob.style.width = "300px";
        spongebob.style.height = "300px";
        document.getElementById("pic").appendChild(spongebob);
    }else if (randomChar === nickChar[5]){
        patrick.src = "assets/images/patrick.jpg";
        patrick.style.width = "300px";
        patrick.style.height = "300px";
        document.getElementById("pic").appendChild(patrick);
    }else if (randomChar === nickChar[6]){
        rocko.src = "assets/images/rocko.jpg";
        rocko.style.width = "300px";
        rocko.style.height = "300px";
        document.getElementById("pic").appendChild(rocko);
    }else if (randomChar === nickChar[7]){
        heffer.src = "assets/images/heffer.jpg";
        heffer.style.width = "300px";
        heffer.style.height = "300px";
        document.getElementById("pic").appendChild(heffer);
    }else if (randomChar === nickChar[8]){
        filbert.src = "assets/images/filbert.jpg";
        filbert.style.width = "300px";
        filbert.style.height = "300px";
        document.getElementById("pic").appendChild(filbert);
    }else if (randomChar === nickChar[9]){
        helga.src = "assets/images/helga.jpg";
        helga.style.width = "300px";
        helga.style.height = "300px";
        document.getElementById("pic").appendChild(helga);
    }else if (randomChar === nickChar[10]){
        angelica.src = "assets/images/angelica.jpg";
        angelica.style.width = "300px";
        angelica.style.height = "300px";
        document.getElementById("pic").appendChild(angelica) ;
    }else if (randomChar === nickChar[11]){
        eliza.src = "assets/images/eliza.jpg";
        eliza.style.width = "300px";
        eliza.style.height = "300px";
        document.getElementById("pic").appendChild(eliza);
    }

}



function startGame() {
    //Sets the random Nick character from the array
    randomChar = nickChar[Math.floor(Math.random() * nickChar.length)];
    //Prints out the random Nick Character on the console
    console.log(randomChar);

    // Sets a loop for randomChar 
    for (var i = 0; i < randomChar.length; i++) {
        //The variable i plugs into the blankSpace array so it can show the length of random word
        blankSpace[i] = ('_');
    }

    //Prints out the random blank spaces on HTML
    document.getElementById("blankSpaces").textContent = blankSpace.join(" ");
    console.log(blankSpace);


    





    //User Guesses
    document.onkeyup = function () {
        // instructions disappear after the key is pressed
        instructions.style.display = "none";

        // Determines which key is pressed
        guessUser = event.key;
        console.log(guessUser);


        // I should set a function that checks the lettter to see if it is already guesssed
        // If the user pushes the key that's already guessed, then it's not going to go anything.
        //





        //Determines if the user win or lose
        function winsLose() {
            // If the length of the string is equal to the amount of correct letters that fill up the blankspace
            if (blankSpace.length === correctLetters) {
                // boolean to prove that the blankspace is completed
                isCompleted = true;
                
                //adds up the wins after the user completes all the letters in the blankspace
                winsCount++;
                document.getElementById('pic').innerHTML = "";
                pics();
                //prints out the updates for the number of wins in the HTML
                document.getElementById("wins").innerHTML = winsCount;

                //reset variables
                lettersWrong = [];
                lettersRight = [];
                blankSpace = [];
                correctLetters = 0;
                guesses = 10;

                //box displays you win and lets user to press any key to continue
                alert("You win! Press Any Key To Continue");

                //calls out the startGame function
                startGame();

                // condition if the user reached to no guesses
            } else if (guesses <= 0) {
                //boolean to prove that the blankspace is incomplete
                isCompleted = false;

                //sets the wins count to zero.
                winsCount = 0;

             // Box pops up to tell the user "You Lose"
                alert ("You Lose! Press Any Key To Continue");

                // sets back to the orange box
                document.getElementById('pic').innerHTML = "";

                //reset variables
                lettersWrong = [];
                lettersRight = [];
                blankSpace = [];
                correctLetters = 0;
                guesses = 10;

               //prints out the wins count to zero after the user loses in order to restart the wins count
                document.getElementById("wins").innerHTML = winsCount;

                // calls out the function
                startGame();

            }
        }
     


        
       //checks to see if the letter exists
        if (randomChar.indexOf(guessUser) > -1){
            for (var i = 0; i < randomChar.length; i++){
                //when the user guess numbers right
                if(randomChar[i] === guessUser) {
                    //fills up the blank space after the user pushes the correct letter
                    blankSpace[i] = guessUser;
                    //pushes to the lettersRight array
                    lettersRight.push(guessUser);
                    //added the number of correct letters
                    correctLetters++;
                    //play the correct sound
                    correct.play();
                    // calls out the winLose Function
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
            //plays the wrong sound
            wrong.play();
            // calls out the winLose Function
            winsLose();
            //displays the number of guess
            document.getElementById('guesses').innerHTML = guesses;
            //displays the letters wrong
            document.getElementById('lettersWrong').innerHTML = lettersWrong.join(" "); 
    
        }
    
    
    }
    
    

    }   

onload = startGame(); //calls the startGame function, also allows to reload the screen
