document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const firstNameInput = document.querySelector('input[name="firstName"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageTextarea = document.querySelector('.form-textarea');
    const subjectRadios = document.querySelectorAll('input[name="subject"]');

    const showError = (element, message) => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';
        errorDiv.textContent = message;

        const existingError = element.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        element.parentElement.appendChild(errorDiv);
    };

    const removeError = (element) => {
        const existingError = element.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validateName = (name) => {
        return name.trim().length >= 2;
    };

    const validateMessage = (message) => {
        return message.trim().length >= 10;
    };

    form.addEventListener('submit', function(e) {
        let isValid = true;
        
        // First Name validation
        if (!validateName(firstNameInput.value)) {
            showError(firstNameInput, 'First name must be at least 2 characters long');
            isValid = false;
        } else {
            removeError(firstNameInput);
        }

        // Last Name validation
        if (!validateName(lastNameInput.value)) {
            showError(lastNameInput, 'Last name must be at least 2 characters long');
            isValid = false;
        } else {
            removeError(lastNameInput);
        }

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        // Subject validation
        if (!validateSubject()) {
            showError(subjectRadios[0], 'Please select a subject');
            isValid = false;
        } else {
            removeError(subjectRadios[0]);
        }

        // Message validation
        if (!validateMessage(messageTextarea.value)) {
            showError(messageTextarea, 'Message must be at least 10 characters long');
            isValid = false;
        } else {
            removeError(messageTextarea);
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    // Real-time validation
    firstNameInput.addEventListener('input', () => {
        if (validateName(firstNameInput.value)) {
            removeError(firstNameInput);
        }
    });

    lastNameInput.addEventListener('input', () => {
        if (validateName(lastNameInput.value)) {
            removeError(lastNameInput);
        }
    });

    emailInput.addEventListener('input', () => {
        if (validateEmail(emailInput.value)) {
            removeError(emailInput);
        }
    });

    messageTextarea.addEventListener('input', () => {
        if (validateMessage(messageTextarea.value)) {
            removeError(messageTextarea);
        }
    });
});