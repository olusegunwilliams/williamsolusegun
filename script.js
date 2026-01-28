document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Animate hamburger
        const bars = document.querySelectorAll('.bar');
        if(navMenu.classList.contains('active')) {
             bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
             bars[1].style.opacity = '0';
             bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Transcript Toggle
    const toggleBtn = document.getElementById('toggle-transcript');
    const transcriptContainer = document.getElementById('transcript-container');

    toggleBtn.addEventListener('click', () => {
        transcriptContainer.classList.toggle('hidden');
        if (transcriptContainer.classList.contains('hidden')) {
            toggleBtn.textContent = 'View Detailed Transcript';
        } else {
            toggleBtn.textContent = 'Hide Transcript';
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Add fade-in class to sections and animate
    document.querySelectorAll('section, .hero, .activity-card, .subject-card').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});
