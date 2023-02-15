const increaseTextSize = document.getElementById("increaseTextSize");
const decreaseTextSize = document.getElementById("decreaseTextSize");
const textElements = document.querySelectorAll("body *:not(.copyright):not(.last-updated):not(.made-by):not(.name_1):not(.title):not(.ab)");

let fontSize = 16;

increaseTextSize.addEventListener("click", () => {
  fontSize += 2;
  textElements.forEach(element => {
    element.style.fontSize = `${fontSize}px`;
  });
});

decreaseTextSize.addEventListener("click", () => {
  fontSize -= 2;
  textElements.forEach(element => {
    element.style.fontSize = `${fontSize}px`;
  });
});
