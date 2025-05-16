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
    "nom": "Booky",
    "image": "images/portrait.jpg",
    "description": "site vitrine en html css",
    "technologies": "html/css"
  },

  {
    "nom": "Sophie Bluel",
    "image": "images/portrait.jpg",
    "description": "développer pour une architecte d'intérieur ",
    "technologies": "Javascript"
  },

  {
    "nom": "Kasa",
    "image": "images/portrait.jpg",
    "description": "ront-end avec React et React Router Dom",
    "technologies": "React, SCSS"
  },
];

const projetsContainer = document.getElementById("projets");

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



