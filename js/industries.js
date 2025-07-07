/**
 * JavaScript for the industries page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll for industries page
    const animateIndustriesElements = function() {
        const elements = document.querySelectorAll('.industry-detail, .case-study');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check for elements in view
    animateIndustriesElements();
    
    // Check for elements on scroll
    window.addEventListener('scroll', animateIndustriesElements);
    
    // Industry tabs functionality
    const industryTabs = document.querySelectorAll('.industry-tab');
    const industryContents = document.querySelectorAll('.industry-content');
    
    industryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const industry = this.getAttribute('data-industry');
            
            // Remove active class from all tabs
            industryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show selected industry content
            industryContents.forEach(content => {
                if (content.getAttribute('data-industry') === industry) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .industry-detail, .case-study {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .industry-detail.animate, .case-study.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
}); 