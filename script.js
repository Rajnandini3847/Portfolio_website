// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Custom animations with IntersectionObserver
const animateOnScroll = (elements, animationClass) => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const aboutContent = document.querySelector('.about-content');
    const serviceItems = document.querySelectorAll('.service-item');
    const contactContainer = document.querySelector('.contact-container');

    animateOnScroll([heroContent], 'fade-in');
    animateOnScroll([aboutContent], 'slide-in-left');
    animateOnScroll(serviceItems, 'slide-up');
    animateOnScroll([contactContainer], 'fade-in-up');
});
