/**
 * Animations and common functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport
            if (elementPosition < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Initial check for elements in view
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');
    
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainMenu.classList.toggle('show');
        });
    }
    
    // Dropdown menu for mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        // For mobile devices
        if (window.innerWidth <= 768) {
            const link = dropdown.querySelector('a');
            
            link.addEventListener('click', function(e) {
                // Only prevent default if it's a mobile view
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or dropdown toggle
            if (href === '#' || this.parentElement.classList.contains('dropdown')) {
                return;
            }
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mainMenu && mainMenu.classList.contains('show')) {
                    mainMenu.classList.remove('show');
                    menuToggle.classList.remove('active');
                }
                
                // Scroll to element
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 