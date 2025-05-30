document.addEventListener('DOMContentLoaded', () => {
    // HAMBURGER MENU
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }));

    // DYNAMIC PRESENTATION
    let intro = document.querySelector("#dynamic-presentation");
    intro.textContent = "Salut tout le monde";

    // PROJETS DYNAMIQUES
    const projets = [
        {
            nom: "Booky",
            image: "images/booky.png",
            description: "Site vitrine en HTML CSS",
            technologies: "HTML/CSS"
        },
        {
            nom: "Sophie Bluel",
            image: "images/Sophie-bluel.png",
            description: "Développé pour une architecte d'intérieur",
            technologies: "JavaScript"
        },
        {
            nom: "Kasa",
            image: "images/kasa.png",
            description: "Front-end avec React et React Router Dom",
            technologies: "React, SCSS"
        },
        {
            nom: "Nina Carducci",
            image: "images/nina-carducci.png",
            description: "Amélioration du référencement SEO d'une photographe + débuggage",
            technologies: "lighthouse, typescript"
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

    // COMPETENCES ANIMATIONS
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
        
        // EFFET RIPPLE
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

    // FORMULAIRE CONTACT
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Animation du bouton
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulation d'envoi
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message envoyé !';
            submitBtn.style.backgroundColor = '#10b981';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.backgroundColor = '#1d4ed8';
                submitBtn.disabled = false;
                this.reset();
            }, 2000);
        }, 2000);
    });
});