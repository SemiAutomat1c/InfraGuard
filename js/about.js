/**
 * JavaScript for the about page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll for about page
    const animateAboutElements = function() {
        const elements = document.querySelectorAll('.mission, .vision, .feature-item, .team-member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check for elements in view
    animateAboutElements();
    
    // Check for elements on scroll
    window.addEventListener('scroll', animateAboutElements);
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .mission, .vision, .feature-item, .team-member {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .mission.animate, .vision.animate, .feature-item.animate, .team-member.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}); 