// for dark mode button

function toggleStylesheets(isDarkMode) {
  var stylesheets = document.querySelectorAll("link[data-stylesheet]");
  stylesheets.forEach(function (stylesheet) {
    stylesheet.disabled = !isDarkMode;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const darkButton = document.getElementById("dark");

  let textDark = document.getElementById("txDark");

  var htmlElement = document.documentElement;
  var isDarkMode = false;

  // Add a click event listener to the button
  darkButton.addEventListener("click", function () {
    var backgroundImage = document.querySelector(".topicDescriptionContainer");
    if (backgroundImage) {
      backgroundImage.style.backgroundColor = "#333333";
    }

    var topicName = document.querySelector(".topicName");
    if (topicName) {
      topicName.style.color = "#ffffff";
    }

    var topicDescription = document.querySelector(".topicDescription ");
    if (topicDescription) {
      topicDescription.style.color = "#ffffff";
    }

    var topicContent = document.querySelector(".topicContent");
    if (topicContent) {
        topicContent.style.backgroundColor = "#ffffff";
    }

    var addButtonContainer = document.querySelector(".addButtonContainer");
    if (addButtonContainer) {
        addButtonContainer.style.setProperty('--lines-color', '#dddddd');
    }

    var addButton = document.querySelector(".addButton");
    if (addButton) {
        addButton.style.color = "#ffffff";
    }

    var addButtonSvg = document.querySelector(".addButton svg");
    if (addButtonSvg) {
      addButtonSvg.style.color = "#ffffff";
    }

    isDarkMode = !isDarkMode;
    htmlElement.classList.toggle("dark-mode", isDarkMode);

    // Toggle stylesheets
    toggleStylesheets(isDarkMode);

    if (textDark.innerText == "Dark Mode") {
      textDark.innerText = "Light Mode";
    } else {
      textDark.innerText = "Dark Mode";
    }
  });
});

// for favorites button
document.addEventListener("DOMContentLoaded", function () {
  const favoritesButton = document.getElementById("Favorites");
  const favoritesContainer = document.getElementById("fav");

  favoritesButton.addEventListener("click", function () {
    if (
      favoritesContainer.style.display === "none" ||
      favoritesContainer.style.display === ""
    ) {
      favoritesContainer.style.display = "block"; // Show the section
    } else {
      favoritesContainer.style.display = "none"; // Hide the section
    }
  });
});
