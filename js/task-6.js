function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }
  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
    boxesContainer.style.display = "flex";
    boxesContainer.style.gap = "5px";
  } else {
    alert("Enter number between 1 and max 100");
  }
});
