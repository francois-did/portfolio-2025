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

    // PROJETS DYNAMIQUES
    const projets = [
        {
            titre: "Booky",
            description: "Site vitrine en HTML CSS",
            image: "images/booky.png",
            descriptionComplete: "Site vitrine moderne pour une librairie fictive avec design responsive et navigation fluide.",
            technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid Layout"],
            objectif: "Maîtriser les fondamentaux du développement front-end sans framework."
        },
        {
            titre: "Sophie Bluel",
            description: "Développé pour une architecte d'intérieur",
            image: "images/Sophie-bluel.png",
            descriptionComplete: "Portfolio interactif pour architecte d'intérieur avec galerie filtrable, authentification admin et gestion de contenu.",
            technologies: ["JavaScript", "HTML5", "CSS3", "API REST", "DOM Manipulation", "Authentification"],
            objectif: "Développer une page web dynamique avec JavaScript en intégrant une API."
        },
        {
            titre: "Kasa",
            description: "Front-end avec React et React Router Dom",
            image: "images/kasa.png",
            descriptionComplete: "Application de location immobilière avec navigation React Router, fiches détaillées et galeries photos.",
            technologies: ["React", "React Router", "Sass/SCSS", "JavaScript ES6", "Responsive Design", "Composants réutilisables"],
            objectif: "Développer une application React moderne avec navigation côté client."
        },
        {
            titre: "Nina Carducci",
            description: "Amélioration du référencement SEO d'une photographe + débuggage",
            image: "images/nina-carducci.png",
            descriptionComplete: "Optimisation complète du portfolio de Nina Carducci : performances, SEO, débogage et accessibilité.",
            technologies: ["SEO", "Lighthouse", "Accessibilité", "Performance Web", "HTML sémantique", "Optimisation d'images"],
            objectif: "Optimiser un site existant pour améliorer son référencement naturel."
        },
        {
            titre: "E-commerce App",
            description: "Application e-commerce complète avec panier, paiement et gestion des stocks",
            icone: "fa-solid fa-shopping-cart",
            couleur: "ecommerce",
            descriptionComplete: "Application e-commerce full-stack avec panier, paiement sécurisé et gestion des stocks en temps réel.",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT", "Redux"],
            objectif: "Développer une solution e-commerce complète front-end et back-end."
        },
        {
            titre: "Task Manager",
            description: "Gestionnaire de tâches avec drag & drop, notifications et synchronisation temps réel",
            icone: "fa-brands fa-react",
            couleur: "task",
            descriptionComplete: "Gestionnaire de tâches avec drag & drop, notifications push et synchronisation temps réel en équipe.",
            technologies: ["React", "TypeScript", "Socket.io", "Node.js", "MongoDB", "PWA", "Service Workers"],
            objectif: "Créer une application de productivité avec synchronisation temps réel."
        }
    ];

    const projectsList = document.querySelector(".projects-list");
    
    projets.forEach((projet) => {
        let iconContent = '';
        
        if (projet.image) {
            // Pour les projets avec images
            iconContent = `<img src="${projet.image}" alt="${projet.titre}" />`;
        } else {
            // Pour les projets avec icônes FontAwesome
            iconContent = `<i class="${projet.icone}"></i>`;
        }
        
        const projetHTML = `
            <div class="project-item">
                <div class="project-icon ${projet.couleur || 'image-icon'}">
                    ${iconContent}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${projet.titre}</h3>
                    <p class="project-description">${projet.description}</p>
                </div>
            </div>
        `;
        projectsList.innerHTML += projetHTML;
    });

    // ANIMATION DES PROJETS AU SCROLL (après création dynamique)
    setTimeout(() => {
        const projectItems = document.querySelectorAll('.project-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        projectItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(item);

            // CLIC SUR LES PROJETS - OUVRIR LA MODALE
            item.addEventListener('click', () => {
                const projectTitle = item.querySelector('.project-title').textContent;
                const project = projets.find(p => p.titre === projectTitle);
                
                if (project) {
                    openModal(project);
                }
            });
        });
    }, 100);

    // FONCTIONS MODALE
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');

    function openModal(project) {
        // Remplir les informations de la modale
        document.getElementById('modalTitle').textContent = project.titre;
        document.getElementById('modalSubtitle').textContent = project.description;
        document.getElementById('modalDescription').textContent = project.descriptionComplete;
        document.getElementById('modalObjectif').textContent = project.objectif;
        
        // Image ou icône
        const modalImage = document.getElementById('modalImage');
        if (project.image) {
            modalImage.src = project.image;
            modalImage.alt = project.titre;
            modalImage.style.display = 'block';
        } else {
            modalImage.style.display = 'none';
        }
        
        // Technologies (en texte simple)
        const techContainer = document.getElementById('modalTechnologies');
        techContainer.textContent = project.technologies.join(', ');
        
        // Liens (tu peux les personnaliser selon tes projets)
        const linksContainer = document.getElementById('modalLinks');
        linksContainer.innerHTML = '';
        
        // Exemple de liens - tu peux les modifier selon tes vrais projets
        if (project.titre === "Booky" || project.titre === "Sophie Bluel") {
            const githubLink = document.createElement('a');
            githubLink.href = '#';
            githubLink.className = 'modal-link';
            githubLink.innerHTML = '<i class="fa-brands fa-github"></i> Voir le projet sur GitHub';
            linksContainer.appendChild(githubLink);
        }
        
        // Afficher la modale
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêcher le scroll
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    }

    // Événements de fermeture de la modale
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});