const increaseTextSize = document.getElementById("increaseTextSize");
const decreaseTextSize = document.getElementById("decreaseTextSize");
const textElements = document.querySelectorAll("body *:not(.copyright):not(.last-updated):not(month):not(year)");

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
