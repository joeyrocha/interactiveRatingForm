const ratingForm = document.getElementById("ratingForm")
const thankYouForm= documnet.getElementById("thankYouForm")
const numberBtn = document.getElementsByClassName(".number_btn")
const submitBtn = document.getElementById("submitButton")

let feedback = 5

numberBtn.onclick = function() {
    window.location.href = "https://www.google.com";
    };
//when the button of class number_btn is clicked i would like it to be highlighted as well as well and keep the value assosiated with with the submit button is selected then transition into another form for the thank you page 


// When the ratilng is selected how would i make the button have the value assosiated with it

if(feedback >= 1 && feedback <= 5) {
    
}