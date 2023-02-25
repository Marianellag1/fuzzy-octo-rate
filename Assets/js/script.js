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

rateAgain.addEventListener("click", () => {//arrow function same as function(){}
    thankYouBox.style.display = "none";
    firstBox.style.display = "block";
})//same code as above, just switching the outcome

rates.forEach( function (rate) {
    rate.addEventListener("click", () => {
        numRating.innerHTML = rate.innerHTML //rate(rates) when btn is pushed will show btn clicked in the span of thankYou rating
        //console.log(rate.innerHTML); using innerHTML The text content of the element, including all spacing and inner HTML tags.
        //without it, it would show just the tag button and their number
    })
})

// document.getElementById("submit").addEventListener("click", myFunction);

// function myFunction() {

// 28-mini project- function- ability to vote again
// var playAgain = confirm("Do you want to play again?");
// console.log(playAgain);

// if (playAgain) { //playAgain === true
//    game();
// }else {
//     alert("Thank you for playing")
// }