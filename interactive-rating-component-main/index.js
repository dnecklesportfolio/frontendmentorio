
document.addEventListener("DOMContentLoaded", function(){
//declare all variables with const
const ratingSection = document.querySelector(".rating")
const thankYouSection = document.querySelector(".thank-you")
 // Get a reference to the form element
const form = document.getElementById('ratingsForm');
const selected = document.querySelector("#selected")

// Add an event listener for the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  if (form.rating.value === "") return;

 selected.innerText = form.rating.value
 ratingSection.classList.add("hide");
 thankYouSection.classList.remove("hide");

  // Reset the form
 form.reset();
});




})