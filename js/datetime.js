document.addEventListener("DOMContentLoaded", function () {
  // Get the current date and time
  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = now.toLocaleDateString("en-US", options);

    // Create or update the date-time element
    let dateTimeElement = document.getElementById("current-datetime");

    if (!dateTimeElement) {
      dateTimeElement = document.createElement("p");
      dateTimeElement.id = "current-datetime";
      dateTimeElement.className = "footer-datetime";

      // Find the footer logo and divider to insert after
      const footerLogo = document.querySelector(".footer-logo");
      const footerDivider = document.querySelector(".footer-divider");

      if (footerLogo && footerDivider) {
        // Create a container for the datetime if it doesn't exist
        let datetimeContainer = document.querySelector(
          ".footer-datetime-container"
        );
        if (!datetimeContainer) {
          datetimeContainer = document.createElement("div");
          datetimeContainer.className = "footer-datetime-container";

          // Insert between the logo and the divider
          if (footerDivider.parentNode) {
            footerDivider.parentNode.insertBefore(
              datetimeContainer,
              footerDivider
            );
          }
        }
        datetimeContainer.appendChild(dateTimeElement);
      }
    }

    dateTimeElement.innerHTML = `
        <em><b>"In the midst of our literary journey, you've joined us on ${formattedDate}. 
        As the Brontë sisters once found solace in their words, may you find inspiration in their timeless stories."<b></em>
    `;
  }

  // Initial update
  updateDateTime();

  // callback for updating time every minute - could be considered as a background task/service and should be placed in some service worker code in prod - aht
  setInterval(updateDateTime, 60000);
});
