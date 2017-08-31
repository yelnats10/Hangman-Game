
//list to guess

var list = ["watchmen", "frozen", "cars","taken","twins","scream","superbad"];


//random pick one of the items in the list
var pickedList = list[Math.floor(Math.random() * list.length)];


//to take the random pickedList and break up each letter
var guess = [];


for (var i = 0; i < pickedList.length; i++) {
    guess.push(pickedList.charAt(i));

};

//test to see if guess worked
console.log(guess);



var replaceMe = [];

for (var i = 0; i < guess.length; i++) {
    //push to an array
    // document.getElementById("hangman-good").innerHTML += "_ ";
    replaceMe.push("_ ");
  };

console.log(replaceMe);

var wrong = [];

document.onkeyup = function(event) {

 var userGuess = event.key;
 var movies = "<p>Guess the Movie</p><p>You can only be wrong 8 times</p>"; 
 document.querySelector("#subject").innerHTML = movies;
 document.getElementById("hangman-good").innerHTML = replaceMe.join("");
 
if (replaceMe.join("") === guess.join("")) {

  return;
} else {


  if (wrong.length === 8) {

    var trailer = '<br><img src="images/hangman.gif">';
              document.querySelector("#trailer").innerHTML = trailer;
  
} else {


   if (guess.indexOf(userGuess) < 0) {
        wrong.push(userGuess);

        var targetBad = document.getElementById("hangman-bad");
        targetBad.innerHTML = wrong;

      } else {
        var mix = guess.indexOf(userGuess);
        replaceMe[mix] = userGuess;
        document.getElementById("hangman-good").innerHTML = replaceMe.join("");

          if (replaceMe.join("") === list[0]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/NUjMO_k9IF8?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } else if (replaceMe.join("") === list[1]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/TbQm5doF_Uc?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } else if (replaceMe.join("") === list[2]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/SbXIj2T-_uk?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } else if (replaceMe.join("") === list[3]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/uPJVJBm9TPA?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } else if (replaceMe.join("") === list[4]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/qtlB7q96NMs?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } else if (replaceMe.join("") === list[5]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/AWm_mkbdpCA?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } else if (replaceMe.join("") === list[6]) {

              var trailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/4q5Mi9gWX8c?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              document.querySelector("#trailer").innerHTML = trailer;
          } 
        }
      }
    }

};
