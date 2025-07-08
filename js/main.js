/**
 * Main JavaScript file with common functionality for all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.main-nav a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Dropdown menu functionality
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdown = document.querySelector('.dropdown');
    
    if (dropdownToggle && dropdownMenu && dropdown) {
        // Ensure dropdown is closed by default
        dropdownMenu.classList.remove('show');
        dropdown.classList.remove('active');
        
        // Toggle dropdown on click
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close any other open elements
            document.querySelectorAll('.show').forEach(el => {
                if (el !== dropdownMenu && el !== this.parentNode) {
                    el.classList.remove('show');
                }
            });
            
            document.querySelectorAll('.active').forEach(el => {
                if (el !== dropdown && !el.classList.contains('main-nav')) {
                    el.classList.remove('active');
                }
            });
            
            // Toggle this dropdown
            dropdownMenu.classList.toggle('show');
            dropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.remove('show');
                dropdown.classList.remove('active');
            }
        });
        
        // Handle hover state for desktop
        const handleHover = function(e) {
            if (window.innerWidth >= 768) { // Only on desktop
                // Close any other open elements
                document.querySelectorAll('.show').forEach(el => {
                    if (el !== dropdownMenu && el !== dropdownToggle.parentNode) {
                        el.classList.remove('show');
                    }
                });
                
                document.querySelectorAll('.active').forEach(el => {
                    if (el !== dropdown && !el.classList.contains('main-nav')) {
                        el.classList.remove('active');
                    }
                });
                
                dropdownMenu.classList.add('show');
                dropdown.classList.add('active');
            }
        };
        
        const handleMouseLeave = function(e) {
            if (window.innerWidth >= 768) { // Only on desktop
                // Use setTimeout to allow moving from toggle to menu
                setTimeout(() => {
                    if (!dropdownToggle.matches(':hover') && !dropdownMenu.matches(':hover')) {
                        dropdownMenu.classList.remove('show');
                        dropdown.classList.remove('active');
                    }
                }, 100);
            }
        };
        
        dropdownToggle.addEventListener('mouseenter', handleHover);
        dropdownMenu.addEventListener('mouseenter', handleHover);
        dropdownToggle.addEventListener('mouseleave', handleMouseLeave);
        dropdownMenu.addEventListener('mouseleave', handleMouseLeave);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile navigation functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('show');
            this.classList.toggle('active');
        });
    }
    
    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.feature-box, .service-item, .news-item, .testimonial');
    animateElements.forEach(element => {
        element.classList.add('animate-fade-in');
    });
    
    // Handle fixed header on scroll
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow to header when scrolling down
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Partners slider animation
    const partnersContainer = document.querySelector('.partners-container');
    if (partnersContainer && partnersContainer.children.length > 0) {
        // Clone partners for infinite scroll effect
        const partners = Array.from(partnersContainer.children);
        partners.forEach(partner => {
            const clone = partner.cloneNode(true);
            partnersContainer.appendChild(clone);
        });
        
        // Animate the partners container
        partnersContainer.classList.add('animate');
    }
}); 