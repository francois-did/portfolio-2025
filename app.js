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
  }
];

const projetsContent = document.querySelector(".projets");

projets.forEach((projet) => {
  const projetHTML = `
    <div class="projet-item"> 
      <div class="projet-img">
        <img src="${projet.image}" alt="${projet.nom}" />
      </div>
      <div class="projet-content"> 
        <p class="projet-nom">${projet.nom}</p>
        <p class="projet-description">${projet.description}</p>
      </div>
    </div>
  `;
  projetsContent.innerHTML += projetHTML;
});


// COMPETENCES

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.competence-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    cards.forEach(card => {
        observer.observe(card);
        
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            Object.assign(ripple.style, {
                width: size + 'px',
                height: size + 'px',
                left: x + 'px',
                top: y + 'px',
                position: 'absolute',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.1)',
                transform: 'scale(0)',
                animation: 'ripple 0.6s linear',
                pointerEvents: 'none'
            });
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});