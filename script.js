const mainCard = document.querySelector(".main-card");
const thankYouCard = document.querySelector(".thankyou-card");
const submitButton = document.querySelector(".btn-submit");
const userRating = document.getElementById("rating");
const ratingNumbers = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    thankYouCard.classList.remove("hidden");
    mainCard.style.display = "none";
})

ratingNumbers.forEach((rating) => {
    rating.addEventListener("click", () => {
        userRating.innerHTML = rating.innerHTML;
    })
})