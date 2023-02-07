window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      document.getElementsByClassName("copyright")[0].style.display = "block";
      document.getElementsByClassName("last-updated")[0].style.display = "block";
    } else {
      document.getElementsByClassName("copyright")[0].style.display = "none";
      document.getElementsByClassName("last-updated")[0].style.display = "none";
    }
  };
  