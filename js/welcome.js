document.addEventListener("DOMContentLoaded", function () {
  const welcomeOverlay = document.getElementById("welcome-overlay");
  const closeButton = document.getElementById("welcome-close-btn");

  // Check if the user has visited before
  const hasVisitedBefore = localStorage.getItem("bronte_visited");

  if (!hasVisitedBefore) {
    // Show the welcome message with animation
    setTimeout(() => {
      welcomeOverlay.classList.add("show");
    }, 300); // Small delay for better effect

    // Mark as visited
    localStorage.setItem("bronte_visited", "true");
  } else {
    // Hide welcome overlay for returning visitors
    welcomeOverlay.classList.add("hidden");
  }

  // Close button functionality
  closeButton.addEventListener("click", function () {
    welcomeOverlay.classList.remove("show");

    // Wait for the fade out animation to complete before hiding
    setTimeout(() => {
      welcomeOverlay.classList.add("hidden");
    }, 500);
  });

  // Also close when clicking outside the welcome container
  welcomeOverlay.addEventListener("click", function (e) {
    if (e.target === welcomeOverlay) {
      welcomeOverlay.classList.remove("show");

      setTimeout(() => {
        welcomeOverlay.classList.add("hidden");
      }, 500);
    }
  });
});
