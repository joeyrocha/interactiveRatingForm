const ratingForm = document.getElementById("ratingForm");
const thankYouForm = document.getElementById("thankYouForm");
const submitButton = document.getElementById("submitButton");
const selectedRatingElement = document.getElementById("selectedRating"); // Added an element to display the selected rating

const ratingButtons = document.querySelectorAll(".number_btn");
let selectedRating = null; // Variable to store the selected rating

ratingButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    selectedRating = button.getAttribute("data-value"); // Store the selected rating
    selectedRatingElement.textContent = `You selected: ${selectedRating}`; // Display the selected rating
  });
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (selectedRating !== null) {
    // Handle form submission here (e.g., show the thank you form)
    ratingForm.style.display = "none";
    thankYouForm.style.display = "block";
  } else {
    alert("Please select a rating before submitting.");
  }
});
/*
Code Structure:

- Variables:
  - ratingForm: Represents the form where users select a rating.
  - thankYouForm: Represents the form that appears after rating submission.
  - submitButton: Represents the button for submitting the rating.
  - selectedRatingElement: Represents the element for displaying the selected rating.
  - ratingButtons: NodeList containing rating buttons.
  - selectedRating: Variable to store the selected rating.

- Event Listeners:
  - For Each Rating Button (button in ratingButtons):
    - When a button is clicked, it executes the following:
      - Set selectedRating to the rating value associated with the clicked button.
      - Update selectedRatingElement to display the selected rating value.

  - For the Submit Button (submitButton):
    - When the submit button is clicked, it executes the following:
      - Prevent the default form submission behavior.
      - Check if a rating has been selected (selectedRating is not null).
      - If a rating is selected:
        - Handle the form submission (e.g., show the thankYouForm and hide the ratingForm).
      - If no rating is selected:
        - Display an alert to remind the user to select a rating before submitting.
*/