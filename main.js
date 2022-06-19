//Mother's Day Slideshow
const nameInputEl = document.getElementById("name-input");
const imagesDiv = document.getElementById("images-container");

function enter() {
  let inputVal = nameInputEl.value.toLowerCase();
  switch (inputVal) {
    case "samina":
    case "saminayasmin":
    case "samina yasmin":
    case "mom":
    case "your mom":
    case "ihsan mom":
    case "ihsan's mom":
      location.href = "./pages/happy-mothers-day.html";
      break;
    default:
      incorrect();
  }
}

function incorrect() {
  nameInputEl.classList.add("invalid");
  setTimeout(() => {
    nameInputEl.classList.remove("invalid");
  }, 600);
}

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 13; i++) {
    const imageEl = document.createElement("img");
    imageEl.src = `../images/pic-${i}.jpg`;
    imageEl.classList.add("images-width");
    imagesDiv.appendChild(imageEl);
  }
});
