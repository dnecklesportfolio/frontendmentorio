
document.addEventListener("DOMContentLoaded", function(){
//declare all variables with const
const ratingSection = document.getElementById("rating")
const thankYouSection = document.getElementById("thank-you")
 // Get a reference to the form element
const form = document.getElementById('ratingsForm');
const selected = document.querySelector("#selected")

//hide the second screen here instead of in css to keep things in central location
thankYouSection.style.display = "none"

// Add an event listener for the form's submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Retrieve the value from the form fields
  selectedValue = document.querySelector('input[name="rating"]:checked');

  // Do something with the retrieved data, like displaying it
  selected.innerText = selectedValue.value
  // You can also send the data to a server using fetch or any other method here
 ratingSection.style.display = "none"
 thankYouSection.style.display = "flex"
  // Reset the form
 form.reset();
});




})