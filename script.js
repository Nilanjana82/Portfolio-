document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Pure JS Typewriter Loop ---
    const words = ["CSE Undergraduate.", "Tech Enthusiast.", "Problem Solver."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = document.getElementById("typewriter");

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterElement.textContent = currentWord.substring(0, charIndex);

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1500; // Freeze word display
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    
    if(typewriterElement) typeEffect();

    // --- 2. Dynamic Scrollspy Nav Highlighter ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });

    // --- 3. Form Handling Loop ---
    const contactForm = document.getElementById("contactForm");
    
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const messageInput = document.getElementById("message").value.trim();

        if(nameInput && emailInput && messageInput) {
            alert(`Thank you, ${nameInput}! Your message was successfully captured.`);
            contactForm.reset();
        } else {
            alert("Error: Please populate all fields prior to sending.");
        }
    });
});