document.addEventListener("DOMContentLoaded", function() {
  document.getElementsByClassName("made-by")[0].style.display = "none";
  document.getElementsByClassName("copyright")[0].style.display = "none";
  document.getElementsByClassName("last-updated")[0].style.display = "none";
});

window.onscroll = function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
    document.getElementsByClassName("made-by")[0].style.display = "block";
    document.getElementsByClassName("copyright")[0].style.display = "block";
    document.getElementsByClassName("last-updated")[0].style.display = "block";
    document.getElementsByClassName("made-by")[0].style.position = "fixed";
    document.getElementsByClassName("copyright")[0].style.position = "fixed";
    document.getElementsByClassName("last-updated")[0].style.position = "fixed";
    document.getElementsByClassName("made-by")[0].style.bottom = "0";
    document.getElementsByClassName("copyright")[0].style.bottom = "0";
    document.getElementsByClassName("last-updated")[0].style.bottom = "0";
  } else {
    document.getElementsByClassName("made-by")[0].style.display = "none";
    document.getElementsByClassName("copyright")[0].style.display = "none";
    document.getElementsByClassName("last-updated")[0].style.display = "none";
    document.getElementsByClassName("made-by")[0].style.position = "";
    document.getElementsByClassName("copyright")[0].style.position = "";
    document.getElementsByClassName("last-updated")[0].style.position = "";
    document.getElementsByClassName("made-by")[0].style.bottom = "";
    document.getElementsByClassName("copyright")[0].style.bottom = "";
    document.getElementsByClassName("last-updated")[0].style.bottom = "";
  }
};
