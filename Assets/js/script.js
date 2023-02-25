// console.log("hello world");
var firstBox = document.querySelector(".first");
var submitBtn = document.getElementById("submit");
var thankYouBox = document.querySelector(".second");
var rateAgain = document.getElementById("again");
var numRating = document.getElementById("number");
var rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", function () {//trying both ways of doing function() to get more confortable
    thankYouBox.style.display = "block";//show
    firstBox.style.display = "none";//no show
})

rateAgain.addEventListener("click", () => {//arrow function same as function(){}
    thankYouBox.style.display = "none";//no show
    firstBox.style.display = "block";//show
})//same code as above, just switching the outcome

rates.forEach( function (rate) {
    rate.addEventListener("click", () => {
        numRating.innerHTML = rate.innerHTML //rate(rates) when btn is pushed will show btn clicked in the span of thankYou rating
        //console.log(rate.innerHTML); using innerHTML The text content of the element, including all spacing and inner HTML tags.
        //without it, it would show just the tag button and their number
    })
})

