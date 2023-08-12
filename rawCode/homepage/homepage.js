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
  'Search for  "Vegetables" ',
  'Search for "Fruits"',
  'Search for "Herbs"',
  'Search for "Spices"',
];
let additionalTextIndex = 0;
let typingAnimation;
let erasingAnimation;

function typeText(text, charIndex) {
  if (charIndex <= text.length) {
    searchPlaceholder.textContent = text.slice(0, charIndex);
    charIndex++;
    typingAnimation = setTimeout(() => typeText(text, charIndex), 100);
  } else {
    erasingAnimation = setTimeout(() => {
      searchPlaceholder.textContent = "";
      setTimeout(() => {
        additionalTextIndex = (additionalTextIndex + 1) % additionalText.length;
        animateText(additionalText[additionalTextIndex]);
      }, 300);
    }, 1000);
  }
}

function animateText(text) {
  typingAnimation = setTimeout(() => {
    typeText(text, 0);
  }, 100);
}

searchInput.addEventListener("focus", () => {
  clearTimeout(typingAnimation);
  clearTimeout(erasingAnimation);
  searchPlaceholder.textContent = "";
});

searchInput.addEventListener("blur", () => {
  animateText(additionalText[additionalTextIndex]);
  additionalTextIndex = (additionalTextIndex + 1) % additionalText.length;
});

animateText(additionalText[additionalTextIndex]);
