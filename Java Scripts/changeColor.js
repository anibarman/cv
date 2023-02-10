const button = document.getElementById("changeColor");
const text = document.querySelector("body");
let colors = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "pink",
  "yellow",
  "gray",
  "brown",
  "indigo",
  "violet",
  "magenta",
  "cyan",
  "olive",
  "maroon",
  "navy",
  "teal",
  "aqua"
  ];
let colorIndex = 0;

button.addEventListener("click", function() {
  text.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});


