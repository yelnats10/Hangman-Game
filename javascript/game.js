//list to guess

var list = ["watchmen", "frozen", "cars","taken","twins","scream","superbad", "spaceballs", "gladiator", "braveheart", "rocky"];

//random pick one of the movies in the list
var pickedList = list[Math.floor(Math.random() * list.length)];

//to take the random pickedList and break up each letter
var guess = [];

//sends each letter of the movie in pickedlist to create an array in guess
for (var i = 0; i < pickedList.length; i++) {
    guess.push(pickedList.charAt(i));
};

//Cheatsheet to know what the answer is
console.log(guess);

//Trailers of movies in list
var trailer = ['<iframe width="560" height="315" src="https://www.youtube.com/embed/NUjMO_k9IF8?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/TbQm5doF_Uc?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/SbXIj2T-_uk?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/uPJVJBm9TPA?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/qtlB7q96NMs?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/AWm_mkbdpCA?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/4q5Mi9gWX8c?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/dAuQ5hBZqqM?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/owK1qxDselE?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/lcHvRnGbawE?autoplay=1" frameborder="0" allowfullscreen></iframe>',
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/3VUblDwa648?autoplay=1" frameborder="0" allowfullscreen></iframe>'];

//contains all the empty values that the user has to guess
var replaceMe = [];

//add _ for every letter in guess and sends it to replaceMe
for (var i = 0; i < guess.length; i++) {
    //push to an array
    // document.getElementById("hangman-good").innerHTML += "_ ";
    replaceMe.push("_ ");
  };

//loads replaceMe on the first time you launch the page so you have an idea on guessing
window.onload = function() {
document.getElementById("hangman-good").innerHTML = replaceMe.join("");
}

//every letter that is wrong goes here
var wrong = [];

//starting point to count down from every mistake
var counter = 10

//starts your win and loses at 0
var wins = 0;
var loses = 0;

//used to loop through correct answers to help with duplicate letters
var empty = replaceMe.length

//The game begins now when pressing a key on the keyboard
document.onkeyup = function(event) {

 var keyInput = event.key;
 var userGuess = keyInput.toLowerCase();
 var movies = "<p>Guess the Movie</p>"; 

function begin(){
 document.querySelector("#subject").innerHTML = movies;
 document.getElementById("hangman-good").innerHTML = replaceMe.join("");
 points();
}

begin();

function points() {
 document.getElementById("score").innerHTML = 
              "<p>Wins: " + wins + "</p>" +
              "<p>Loses: " + loses + "</p>";
}

//function to look for the right Trailer
function findTrailer() {
  if (replaceMe.join("") === guess.join("")) {
    var number = list.indexOf(pickedList);
    wins++;
    counter = ((counter - counter) + 10);
    gameReset();
    points();
    document.querySelector("#trailer").innerHTML = trailer[number];
  }
}


//create a function on what happens when the user guess wrong 
function guessWrong(userGuess) {
    wrong.push(userGuess);
    var targetBad = document.getElementById("hangman-bad");
    targetBad.innerHTML = wrong;
    counter--;
    document.getElementById("counter").innerHTML = "<p>Tries Left: " + counter;
    document.querySelector("#trailer").innerHTML = "<p></p>";     
}

function guessReset() {
    wrong.push();
    var targetBad = document.getElementById("hangman-bad");
    targetBad.innerHTML = wrong;
    document.getElementById("counter").innerHTML = "<p>Tries Left: " + counter;    
}

function gameReset() {
    userGuess = undefined;
    wrong = [];
    guess = [];
    replaceMe = [];  
    pickedList = list[Math.floor(Math.random() * list.length)];           
    for (var i = 0; i < pickedList.length; i++) {
        guess.push(pickedList.charAt(i));
    };
    console.log(guess);
    for (var i = 0; i < guess.length; i++) {
        replaceMe.push("_ ");
    };
    document.getElementById("hangman-good").innerHTML = replaceMe.join("");
    guessReset();
    begin();
    empty = replaceMe.length
    document.getElementById("counter").innerHTML = "<p>Tries Left: " + counter;
}

//the parent IF that ends the user guess right and stops so that you can press anymore keys
if (replaceMe.join("") === guess.join("")) {

  return;
} else {
//This section is if the user guessed wrong and helps keep the counter between 0 and 10
        if (guess.indexOf(userGuess) < 0 && wrong.length != 10) {
          if (wrong.indexOf(userGuess) < 0) {
           guessWrong(userGuess);
           console.log(userGuess);

//Needed to put this section here so that the games ends when you are wrong 10 times
            if (wrong.length === 10) {
              loses++;
              points();
              var gameOver = '<br><img src="images/hangman.gif">';
              document.querySelector("#trailer").innerHTML = gameOver;
              counter += 10;
              gameReset();
            }
          }

//******This section is  if the user guessed right******
        } else {

//This For Loop helps with duplicate letters that are correct            
            for (var i = 0; i < empty; i++) {        
              if (guess[i] === userGuess) {               
                replaceMe[i] = userGuess;
                document.getElementById("hangman-good").innerHTML = replaceMe.join("");
                document.querySelector("#trailer").innerHTML = "<p></p>";
              }
//This section matches the correct answer with the movie trailer
              findTrailer();
        }
    }
  }
};