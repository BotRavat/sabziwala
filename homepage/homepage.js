function openForm(formType) {
  if (formType === "SignUp") {
    document.getElementById("signup").classList.add("active");
    document.getElementById("signin").classList.remove("active");
  } else {
    document.getElementById("signin").classList.add("active");
    document.getElementById("signup").classList.remove("active");
  }
}
function closeForm(formType) {
  if (formType === "SignUp") {
    document.getElementById("signup").classList.remove("active");
  } else {
    document.getElementById("signin").classList.remove("active");
  }
}

// js for search input

const searchInput = document.getElementById("search-input");
const searchPlaceholder = document.getElementById("search-input-placeholder");
const additionalText = [
  "Search for  \"Vegetables\" ",
  "Search for \"Fruits\"",
  "Search for \"Herbs\"",
  "Search for \"Spices\"",
];
let additionalTextIndex = 0;
let typingAnimation;

function animateText(text) {
  searchPlaceholder.textContent = "";
  let charIndex = 0;
  typingAnimation = setInterval(() => {
    if (charIndex <= text.length) {
      searchPlaceholder.textContent = text.slice(0, charIndex);
      charIndex++;
    } else {
      clearInterval(typingAnimation);
      setTimeout(() => {
        additionalTextIndex = (additionalTextIndex + 1) % additionalText.length;
        animateText(additionalText[additionalTextIndex]);
      }, 1000);
    }
  }, 100);
}

searchInput.addEventListener("focus", () => {
  clearInterval(typingAnimation);
  searchPlaceholder.textContent = "";
});

searchInput.addEventListener("blur", () => {
  animateText(additionalText[additionalTextIndex]);
  additionalTextIndex = (additionalTextIndex + 1) % additionalText.length;
});

animateText(additionalText[additionalTextIndex]);
