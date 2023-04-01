// handle "Test It Out" button click event
const testBtn = document.querySelector(".btn_try-now");
testBtn.addEventListener("click", () => {
    alert("Welcome to SmartGPT!");
});

// add answer to question 3 dynamically
const answer3 = document.querySelector(".${answer}");
answer3.innerHTML = "SmartGPT is trained on a vast corpus of text data from diverse sources, such as books, articles, and online content. It uses this training to develop an understanding of language and context. SmartGPT can comprehend complex sentences and nuances in language, allowing it to produce highly relevant and accurate responses.";

// handle FAQ dropdown menu
const dropdown = document.querySelector(".faq__dropdown");
const dropdownContent = document.querySelector(".faq__dropdown--content");
dropdown.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
});

// close dropdown menu when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.faq__dropdown')) {
        dropdownContent.classList.remove('show');
    }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
      document.body.classList += " dark-theme"
    }
    else {
      document.body.classList.remove("dark-theme")
    }
  }