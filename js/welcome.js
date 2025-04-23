document.addEventListener("DOMContentLoaded", function () {
  const welcomeOverlay = document.getElementById("welcome-overlay");
  const closeButton = document.getElementById("welcome-close-btn");

  const hasVisitedBefore = localStorage.getItem("bronte_visited");

  if (!hasVisitedBefore) {
    welcomeOverlay.classList.remove("hidden");

    setTimeout(() => {
      welcomeOverlay.classList.add("show");
    }, 100);

    localStorage.setItem("bronte_visited", "true");
  }

  closeButton.addEventListener("click", function () {
    welcomeOverlay.classList.remove("show");

    setTimeout(() => {
      welcomeOverlay.classList.add("hidden");
    }, 500);
  });

  welcomeOverlay.addEventListener("click", function (e) {
    if (e.target === welcomeOverlay) {
      welcomeOverlay.classList.remove("show");

      setTimeout(() => {
        welcomeOverlay.classList.add("hidden");
      }, 500);
    }
  });
});
