/**
 * JavaScript for the home page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll for home page
    const animateHomeElements = function() {
        const elements = document.querySelectorAll('.service-card, .trust-item, .industry-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check for elements in view
    animateHomeElements();
    
    // Check for elements on scroll
    window.addEventListener('scroll', animateHomeElements);
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .trust-item, .industry-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .service-card.animate, .trust-item.animate, .industry-item.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}); 