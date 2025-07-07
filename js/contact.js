/**
 * JavaScript for the contact page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            // Reset error messages
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            
            // Validate name
            if (!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            }
            
            // Validate email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Validate message
            if (!messageInput.value.trim()) {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thank you! Your message has been sent successfully.';
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
                
                // In a real implementation, you would send the form data to a server here
                console.log('Form submitted with:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    message: messageInput.value
                });
            }
        });
    }
    
    // Function to show error message
    function showError(inputElement, message) {
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        
        inputElement.parentNode.appendChild(errorMessage);
        inputElement.classList.add('error');
    }
    
    // Google Maps initialization (placeholder)
    // In a real implementation, you would initialize Google Maps here
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = '<div class="map-placeholder">Google Map will be displayed here in production</div>';
    }
    
    // Add CSS for form validation
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: #ff3860;
            font-size: 0.8rem;
            margin-top: 5px;
        }
        
        .success-message {
            color: #23d160;
            font-size: 1.2rem;
            text-align: center;
            padding: 20px;
        }
        
        input.error, textarea.error {
            border-color: #ff3860;
        }
        
        .map-placeholder {
            background-color: #f5f5f5;
            text-align: center;
            padding: 50px;
            border: 1px dashed #ccc;
        }
    `;
    document.head.appendChild(style);
}); 