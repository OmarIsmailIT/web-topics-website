const mainContainer = document.getElementById("test");
 const svgFill=
'<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"> <path d = "M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z" /></svg>';
const svgEmpty=
'<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/></svg>';
const svgHalf=
'<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M256 48v316L118 464l54-160-140-96h172l52-160z"/></svg>';
// Example data with different content
const items = [
  {
    imageUrl: "Logos/html.png",
    altText: "html",
    description: "Web Development Languages",
    title: "HTML",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Sarah Smith",
  },
  {
    imageUrl: "Logos/css.webp",
    altText: "css",
    description: "Web Development Languages",
    title: "CSS",
    fillStars: 3,
    emptyStars: 1,
    halfStars: 1,
    author: "Author:David Lee",
  },
  {
    imageUrl: "Logos/javascript.jpg",
    altText: "javascript",
    description: "Web Development Languages",
    title: "JavaScript",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Emily Chen",
  },
  {
    imageUrl: "Logos/jquery.png",
    altText: "jquery",
    description: "Frontend Frameworks and Libraries",
    title: "jQuery",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:John Johnson",
  },
  {
    imageUrl: "Logos/angular.png",
    altText: "angular",
    description: "Frontend Frameworks and Libraries",
    title: "jQuery",
    fillStars: 3,
    emptyStars: 1,
    halfStars: 1,
    author: "Author:Jessica Davis",
  },
  {
    imageUrl: "Logos/react.webp",
    altText: "react",
    description: "Frontend Frameworks and Libraries",
    title: "jQuery",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Daniel Brown",
  },
  {
    imageUrl: "Logos/vuejs.jpeg",
    altText: "vuejs",
    description: "Frontend Frameworks and Libraries",
    title: "Vue.js",
    fillStars: 3,
    emptyStars: 1,
    halfStars: 1,
    author: "Author:Ava Jones",
  },
  {
    imageUrl: "Logos/nodejs.webp",
    altText: "nodejs",
    description: "Backend Frameworks and Libraries",
    title: "Node.js",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Michael Kim",
  },
  {
    imageUrl: "Logos/expressjs.webp",
    altText: "expressjs",
    description: "Backend Frameworks and Libraries",
    title: "Express.js",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Sophia Rodriquez",
  },
  {
    imageUrl: "Logos/ruby.jpeg",
    altText: "ruby",
    description: "Backend Frameworks and Libraries",
    title: "Ruby on Rails",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Sophia Rodriquez",
  },
  {
    imageUrl: "Logos/django.jpeg",
    altText: "django",
    description: "Backend Frameworks and Libraries",
    title: "Django",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Olivia Martinez",
  },
  {
    imageUrl: "Logos/flask.webp",
    altText: "flask",
    description: "Backend Frameworks and Libraries",
    title: "Flask",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Ethan Thompson",
  },
  {
    imageUrl: "Logos/sql.png",
    altText: "sql",
    description: "Databases and APIs",
    title: "SQL",
    fillStars: 4,
    emptyStars: 0,
    halfStars: 1,
    author: "Author:Madison Davis",
  },
  {
    imageUrl: "Logos/nosql.png",
    altText: "nosql",
    description: "Databases and APIs",
    title: "NoSQL",
    fillStars: 4,
    emptyStars: 0,
    halfStars: 1,
    author: "Author:Isabella Wilson",
  },
  {
    imageUrl: "Logos/restapi.jpeg",
    altText: "restapi",
    description: "Databases and APIs",
    title: "REST APIs",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Jacob Garcia",
  },
  {
    imageUrl: "Logos/graphql.png",
    altText: "graphql",
    description: "Databases and APIs",
    title: "GraphQL",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Mia Brown",
  },
  {
    imageUrl: "Logos/oauth.png",
    altText: "OAuth",
    description: "Web Development Concepts and Technologies",
    title: "OAuth",
    fillStars: 3,
    emptyStars: 1,
    halfStars: 1,
    author: "Author:Evelyn Nguyen",
  },
  {
    imageUrl: "Logos/json.png",
    altText: "json",
    description: "Web Development Concepts and Technologies",
    title: "JSON",
    fillStars: 3,
    emptyStars: 1,
    halfStars: 1,
    author: "Author:Liam Hernandez",
  },
  {
    imageUrl: "Logos/ajax.gif",
    altText: "ajax",
    description: "Web Development Concepts and Technologies",
    title: "AJAX",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Avery Perez",
  },
  {
    imageUrl: "Logos/websockets.png",
    altText: "websockets",
    description: "Web Development Concepts and Technologies",
    title: "Websockets",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Victoria Kim",
  },
  {
    imageUrl: "Logos/responsive.gif",
    altText: "responsive",
    description: "Web Development Concepts and Technologies",
    title: "Responsive Design",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Ryan Jones",
  },
  {
    imageUrl: "Logos/accessibility.png",
    altText: "accessibility",
    description: "Web Development Concepts and Technologies",
    title: "Accessibility",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Samantha Martin",
  },
  {
    imageUrl: "Logos/ux.jpeg",
    altText: "ux",
    description: "Web Development Concepts and Technologies",
    title: "User Experience (UX)",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Luke Davis",
  },
  {
    imageUrl: "Logos/ui.png",
    altText: "ui",
    description: "Web Development Concepts and Technologies",
    title: "User Interface (UI)",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Grace Wilson",
  },
  {
    imageUrl: "Logos/design-systems.jpeg",
    altText: "design-systems",
    description: "Web Development Concepts and Technologies",
    title: "Design System",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Noah Martinez",
  },
  {
    imageUrl: "Logos/performance.png",
    altText: "performance",
    description: "Web Development Concepts and Technologies",
    title: "Performance Optimization",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Chloe Taylor",
  },
  {
    imageUrl: "Logos/cross-browser.jpeg",
    altText: "cross-browser",
    description: "Web Development Concepts and Technologies",
    title: "Cross-Browser Compatibility",
    fillStars: 4,
    emptyStars: 0,
    halfStars: 1,
    author: "Author:David Lee",
  },
  {
    imageUrl: "Logos/seo.jpeg",
    altText: "seo",
    description: "Web Development Concepts and Technologies",
    title: "Search Engine Optimization (SEO)",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Emily Kim",
  },
  {
    imageUrl: "Logos/web-security.jpeg",
    altText: "web-security",
    description: "Web Development Concepts and Technologies",
    title: "Web Security",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Gabriel Hernandez",
  },
  {
    imageUrl: "Logos/testing.jpeg",
    altText: "testing",
    description: "Web Development Concepts and Technologies",
    title: "Testing and Debugging",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Avery Perez",
  },
  {
    imageUrl: "Logos/ci-cd.jpeg",
    altText: "ci-cd",
    description: "Web Development Concepts and Technologies",
    title: "Continuous Integration/Continuous Delivery",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Madison Davis",
  },
  {
    imageUrl: "Logos/devops.png",
    altText: "devops",
    description: "Web Development Concepts and Technologies",
    title: "DevOps",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Isabella Wilson",
  },
  {
    imageUrl: "Logos/cloud.jpeg",
    altText: "cloud",
    description: "Web Development Concepts and Technologies",
    title: "Cloud Computing",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Jacob Garcia",
  },
  {
    imageUrl: "Logos/docker.png",
    altText: "docker",
    description: "Web Development Concepts and Technologies",
    title: "Docker",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Mia Brown",
  },
  {
    imageUrl: "Logos/microservices.png",
    altText: "microservices",
    description: "Web Development Concepts and Technologies",
    title: "Microservices",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Evelyn Nguyen",
  },
  {
    imageUrl: "Logos/pwa.png",
    altText: "pwa",
    description: "Web Development Concepts and Technologies",
    title: "Progress Web Apps (PWA)",
    fillStars: 3,
    emptyStars: 2,
    halfStars: 0,
    author: "Author:Liam Hernandez",
  },
  {
    imageUrl: "Logos/wai.jpeg",
    altText: "wai",
    description: "Web Development Concepts and Technologies",
    title: "Web Accessibility Initiative (WAI)",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 1,
    author: "Author:Avery Perez",
  },
  {
    imageUrl: "Logos/cms.png",
    altText: "cms",
    description: "Web Development Concepts and Technologies",
    title: "Content Management System (CMS)",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Victoria Kim",
  },
  {
    imageUrl: "Logos/analytics.png",
    altText: "analytics",
    description: "Web Development Concepts and Technologies",
    title: "Web Analytics",
    fillStars: 4,
    emptyStars: 1,
    halfStars: 0,
    author: "Author:Ryan Jones",
  },
];

// Loop through the data and create elements for each item
items.forEach((item) => {
  // for create the topic container
  const itemElement = document.createElement("section");
  itemElement.classList.add("item");
  itemElement.className = "topicContent";

  // for create the figure and create image and put it in the figure
  const figureElement = document.createElement("figure");
  // figureElement.classList.add("item");
  figureElement.className = "image-container";

  const imageElement = document.createElement("img");
  imageElement.src = item.imageUrl;
  imageElement.alt = item.altText;
  figureElement.appendChild(imageElement);

  // for the topic type and it's name
  const definElement = document.createElement("section");
  definElement.className = "definition";

  //for the definition
  const descriptionElement = document.createElement("p");
  descriptionElement.className = "topicType ";
  descriptionElement.textContent = item.description;
  definElement.appendChild(descriptionElement);

  const titleElement = document.createElement("p");
  titleElement.className = " topicName";
  titleElement.textContent = item.title;
  definElement.appendChild(titleElement);

  // for make the stars
  const rating = document.createElement("section");
  rating.className = "rating";
  if (item.fillStars > 0) {
    for (let index = 0; index < item.fillStars; index++) {
      const iconElement = document.createElement("div");
      const starIcon = svgFill;
      iconElement.innerHTML = starIcon;
      rating.appendChild(iconElement);
    }
  }
  if (item.halfStars > 0) {
    for (let index = 0; index < item.halfStars; index++) {
      const iconElement = document.createElement("div");
      const starIcon = svgHalf;
      iconElement.innerHTML = starIcon;
      rating.appendChild(iconElement);
    }
  }
  if (item.emptyStars > 0) {
    for (let index = 0; index < item.emptyStars; index++) {
      const iconElement = document.createElement("div");
      const starIcon = svgEmpty;
      iconElement.innerHTML = starIcon;
      rating.appendChild(iconElement);
    }
  }

  // for the author name
  const authorSection = document.createElement("section");
  authorSection.className = " definition";
  const authorName = document.createElement("p");
  authorName.textContent = item.author;
  authorName.classList.add("author");
  authorSection.appendChild(authorName);

  // Append the title and description to the item element
  itemElement.appendChild(figureElement);
  itemElement.appendChild(definElement);
  itemElement.appendChild(rating);
  itemElement.appendChild(authorSection);

  // Append the item element to the container
  mainContainer.appendChild(itemElement);
});

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
    var backgroundImage = document.querySelector(".image-container img");
    if (backgroundImage) {
      backgroundImage.style.backgroundColor = "#ffffff";
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


  if (favoritesContainer.style.display === "none" || favoritesContainer.style.display === "") 
  {
    favoritesContainer.style.display = "block"; // Show the section
  } 
  else 
  {
    favoritesContainer.style.display = "none"; // Hide the section
  }
});
});
