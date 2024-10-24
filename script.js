// Get the navbar
const navbar = document.getElementById('navbar');

// Add an event listener to the window for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
