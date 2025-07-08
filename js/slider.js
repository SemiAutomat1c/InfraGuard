/**
 * Slider functionality for the hero section
 */

document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;

    // Initialize the slider
    function initSlider() {
        // Set up event listeners
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        // Set up dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
        });
        
        // Start auto-sliding
        startSlideShow();
    }
    
    // Go to a specific slide
    function goToSlide(slideIndex) {
        // Remove active class from all slides and dots
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Add active class to current slide and dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        
        // Update current slide index
        currentSlide = slideIndex;
    }
    
    // Go to the next slide
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        goToSlide(nextIndex);
    }
    
    // Go to the previous slide
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        goToSlide(prevIndex);
    }
    
    // Start auto-sliding
    function startSlideShow() {
        // Clear any existing interval
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        
        // Set up new interval
        slideInterval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    // Pause auto-sliding when user interacts with slider
    function pauseSlideShow() {
        clearInterval(slideInterval);
    }
    
    // Resume auto-sliding after user interaction
    function resumeSlideShow() {
        startSlideShow();
    }
    
    // Add event listeners for pausing/resuming
    if (document.querySelector('.hero-slider')) {
        document.querySelector('.hero-slider').addEventListener('mouseenter', pauseSlideShow);
        document.querySelector('.hero-slider').addEventListener('mouseleave', resumeSlideShow);
    }
    
    // Initialize the slider if it exists on the page
    if (slides.length > 0 && dots.length > 0) {
        initSlider();
    }
}); 