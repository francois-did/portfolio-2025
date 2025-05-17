const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))



let intro = document.querySelector("#dynamic-presentation");

intro.textContent = "Salut tout le monde"




// PROJETS

const projets = [
  {
    nom: "Booky",
    image: "images/portrait.jpg",
    description: "site vitrine en html css",
    technologies: "html/css"
  },
  {
    nom: "Sophie Bluel",
    image: "images/portrait.jpg",
    description: "développer pour une architecte d'intérieur",
    technologies: "Javascript"
  },
  {
    nom: "Kasa",
    image: "images/portrait.jpg",
    description: "front-end avec React et React Router Dom",
    technologies: "React, SCSS"
  },
  {
    nom: "Booky (copy)",
    image: "images/portrait.jpg",
    description: "site vitrine en html css (copie)",
    technologies: "html/css"
  },
  {
    nom: "Kasa (copy)",
    image: "images/portrait.jpg",
    description: "version doublée de Kasa",
    technologies: "React"
  }
];

const projetsContainer = document.querySelector(".projets-carousel");


projets.forEach((projet) => {
  const card = `
    <div class="carte-projet">
      <img src="${projet.image}" alt="${projet.nom}">
      <div class="carte-texte"> 
        <h3 class="projet-nom">${projet.nom}</h3>
        <p class="projet-description">${projet.description}</p>
        <p class="projet-techno">${projet.technologies}</p>
      </div>
    </div>
  `;
  projetsContainer.innerHTML += card;
});

// Carousel JS
let scrollAmount = 0;
const scrollStep = projetsContainer.querySelector(".carte-projet").offsetWidth + 24;


document.querySelector(".carousel-btn.left").addEventListener("click", () => {
  if (projetsContainer.scrollLeft <= 0) {
    projetsContainer.scrollTo({
      left: projetsContainer.scrollWidth,
      behavior: "smooth"
    });
  } else {
    projetsContainer.scrollBy({
      left: -scrollStep,
      behavior: "smooth"
    });
  }
});


document.querySelector(".carousel-btn.right").addEventListener("click", () => {
  const maxScroll = projetsContainer.scrollWidth - projetsContainer.clientWidth;

  if (projetsContainer.scrollLeft >= maxScroll) {
    projetsContainer.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  } else {
    projetsContainer.scrollBy({
      left: scrollStep,
      behavior: "smooth"
    });
  }
});





