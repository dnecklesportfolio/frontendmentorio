
document.addEventListener("DOMContentLoaded", function(){
//declare all variables with const
const ratingSection = document.getElementById("rating")
const thankYouSection = document.getElementById("thank-you")
const btnSubmit= document.querySelector("#btn-submit")
const ratings = document.querySelectorAll("#rating ul li button")
const selected = document.querySelector("#selected")
//hide the second screen here instead of in css to keep things in central location
thankYouSection.style.display = "none"

//set listeners on all buttons

Array.from(ratings).forEach(rating => {
rating.addEventListener("click",()=>{
//add class
rating.classList.add("active")
selected.innerText = rating.innerText
})
});


btnSubmit.addEventListener('click',()=>{
  ratingSection.style.display = "none"
thankYouSection.style.display = "flex"
})




})