// console.log("hello world");
var firstBox = document.querySelector(".first");
var submitBtn = document.getElementById("submit");
var thankYouBox = document.querySelector(".second");
var rateAgain = document.getElementById("again");
var numRating = document.getElementById("number");
var rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thankYouBox.style.display = "block";
    firstBox.style.display = "none";
})

rateAgain.addEventListener("click", () => {
    thankYouBox.style.display = "none";
    firstBox.style.display = "block";
})//same code as above, just switching the outcome

// document.getElementById("submit").addEventListener("click", myFunction);

// function myFunction() {

// document.getElementById("two").style.display = "block";
// document.getElementById("one").style.display = "none";
// if (rateAgain){
//     document.getElementById("two").style.display = "none";
//     document.getElementById("one").style.display = "block";
// }
// }


// function rate () {
    
// }

// rate();


// 28-mini project- function- ability to vote again
// var playAgain = confirm("Do you want to play again?");
// console.log(playAgain);

// if (playAgain) { //playAgain === true
//    game();
// }else {
//     alert("Thank you for playing")
// }