
var list = ["abc", "defg", "hijkl"];

var pickedList = list[Math.floor(Math.random() * list.length)];

var guess = [];


for (var i = 0; i < pickedList.length; i++) {
    guess.push(pickedList.charAt(i));
}


var got = [];

    
document.onkeyup = function(event) {

 var userGuess = event.key;

    
  if (pickedList === "defg") {

    if ((userGuess === guess[0]) || (userGuess === guess[1]) || (userGuess === guess[2]) || (userGuess === guess[3])) {

      if (userGuess === guess[0]) {
        got.push(userGuess);
      } 
      else if (userGuess === guess[1]) {
        got.push(userGuess);
      } 
      else if (userGuess === guess[2]) {
        got.push(userGuess);
      } 
      else if (userGuess === guess[3]) {
        got.push(userGuess);
      } 
    

       
      var html =
        "<p>" + got[0] + " " + got[1] + " " + got[2] + " " + got[3] + "</p>";

          // Set the inner HTML contents of the #game div to our html string
      document.querySelector("#hangman").innerHTML = html;
    }
  }
};