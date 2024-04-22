document.getElementById("popupButton").addEventListener("click", function() {
  // Show spinner modal
  document.getElementById("myModal").style.display = "flex";

  // After 3 seconds, hide spinner modal and show confirmation modal
  setTimeout(function() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("confirmationModal").style.display = "flex";

    // After another 3 seconds, hide the confirmation modal
    setTimeout(function() {
      document.getElementById("confirmationModal").style.display = "none";
    }, 3000);
  }, 3000);
});