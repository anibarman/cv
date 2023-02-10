document.getElementById("redirectButton").addEventListener("click", function() {
    var choice = window.confirm("Do you want to go to the home page?");
    if (choice) {
      window.location.href = "index.html";
    }
  });