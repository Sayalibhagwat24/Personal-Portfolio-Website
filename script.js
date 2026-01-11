document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navigation Toggle for Mobile ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate Progress Bars only when visible
                if (entry.target.classList.contains('skills-section')) {
                    document.querySelectorAll('.progress').forEach(bar => {
                        bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
                    });
                }
                
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .slide-in-left, .slide-in-right, .skills-section');
    animatedElements.forEach(el => observer.observe(el));

    // --- Navbar Background on Scroll ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            navbar.style.padding = "0.5rem 0";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            navbar.style.padding = "1rem 0";
        }
    });
});