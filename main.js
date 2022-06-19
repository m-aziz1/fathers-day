// FATHER'S DAY

// Home Page
const nameInputEl = document.getElementById("name-input");

function enter() {
  let inputVal = nameInputEl.value.toLowerCase();
  switch (inputVal) {
    case "tariq":
    case "tariq ":
    case "tariqaziz":
    case "tariq aziz":
    case "father":
    case "your father":
    case "ihsan father":
    case "ihsan's father":
      location.href = "./pages/happy-fathers-day.html";
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

// Slide Show
function loadPage() {
  const imagesDiv = document.getElementById("images-container");
  for (let i = 1; i <= 8; i++) {
    const imageEl = document.createElement("img");
    imageEl.src = `../media/pic-${i}.jpeg`;
    imageEl.classList.add("images-width");
    imagesDiv.appendChild(imageEl);
  }

  document.getElementById("ko-ko-korina").play();
}
