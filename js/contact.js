/**
 * JavaScript for the contact page
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formResponse = form.querySelector('.form-response');
    const successMessage = formResponse.querySelector('.success-message');
    const errorMessage = formResponse.querySelector('.error-message');
    const submitButton = form.querySelector('button[type="submit"]');
    const buttonText = submitButton.querySelector('.btn-text');
    const buttonLoader = submitButton.querySelector('.btn-loader');

    // Validation messages
    const validationMessages = {
        name: {
            required: 'Please enter your full name',
            minlength: 'Name must be at least 2 characters long'
        },
        email: {
            required: 'Please enter your email address',
            invalid: 'Please enter a valid email address'
        },
        service: {
            required: 'Please select a service'
        },
        message: {
            required: 'Please enter your message',
            minlength: 'Message must be at least 10 characters long'
        },
        consent: {
            required: 'Please accept our privacy policy'
        }
    };

    // Real-time validation
    form.querySelectorAll('input, textarea, select').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.dataset.touched) validateField(field);
        });
    });

    // Field validation function
    function validateField(field) {
        const feedbackElement = field.parentElement.querySelector('.form-feedback');
        field.dataset.touched = 'true';
        
        // Reset validation state
        field.classList.remove('is-invalid', 'is-valid');
        feedbackElement.textContent = '';
        
        // Required validation
        if (field.required && !field.value.trim()) {
            field.classList.add('is-invalid');
            feedbackElement.textContent = validationMessages[field.name].required;
            return false;
        }

        // Field-specific validation
        switch (field.name) {
            case 'name':
                if (field.value.length < 2) {
                    field.classList.add('is-invalid');
                    feedbackElement.textContent = validationMessages.name.minlength;
                    return false;
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (field.value && !emailRegex.test(field.value)) {
                    field.classList.add('is-invalid');
                    feedbackElement.textContent = validationMessages.email.invalid;
                    return false;
                }
                break;

            case 'phone':
                if (field.value) {
                    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
                    if (!phoneRegex.test(field.value)) {
                        field.classList.add('is-invalid');
                        feedbackElement.textContent = 'Please enter a valid phone number';
                        return false;
                    }
                }
                break;

            case 'message':
                if (field.value.length < 10) {
                    field.classList.add('is-invalid');
                    feedbackElement.textContent = validationMessages.message.minlength;
                    return false;
                }
                break;
        }

        // If we get here, the field is valid
        field.classList.add('is-valid');
        return true;
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        form.querySelectorAll('input, textarea, select').forEach(field => {
            if (!validateField(field)) isValid = false;
        });

        if (!isValid) {
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.focus();
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        buttonText.style.opacity = '0';
        buttonLoader.style.display = 'inline-block';
        formResponse.style.display = 'none';

        try {
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Send to backend
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error('Server error');

            // Show success message
            form.reset();
            form.querySelectorAll('.is-valid').forEach(field => {
                field.classList.remove('is-valid');
            });
            formResponse.style.display = 'block';
            successMessage.style.display = 'flex';
            errorMessage.style.display = 'none';
            
            // Scroll to response
            formResponse.scrollIntoView({ behavior: 'smooth', block: 'center' });

        } catch (error) {
            console.error('Form submission error:', error);
            formResponse.style.display = 'block';
            successMessage.style.display = 'none';
            errorMessage.style.display = 'flex';
        } finally {
            // Reset button state
            submitButton.disabled = false;
            buttonText.style.opacity = '1';
            buttonLoader.style.display = 'none';
        }
    });

    // Smooth scroll for map link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

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