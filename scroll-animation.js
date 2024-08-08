// scroll-animations.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all sections with the 'section' class
    const sections = document.querySelectorAll('.section');

    // Options for the Intersection Observer
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class when the section is in view
                entry.target.classList.add('visible');
                // Optionally, stop observing this section once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
