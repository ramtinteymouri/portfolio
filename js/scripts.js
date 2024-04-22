(function () {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let phoneInput = document.querySelector('#contact-phone');
    let messageInput = document.querySelector('#contact-message');

    function showErrorMessage(input, message) {
        let container = input.parentElement; // The .input-wrapper
        // Check and Remove any existing errors
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }
        // Now add the error if the message isn't empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false
        }
        if (!emailPattern.test(value)) {
            showErrorMessage(emailInput, 'You must enter a valid email address');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validatePhoneNumber() {
        let value = phoneInput.value;
        let pattern = /^\d{3}\-\d{3}\-\d{4}$/;
        if (!pattern.test(value)) {
            showErrorMessage(phoneInput, 'The phone number needs to follow the correct pattern');
            return false;
        }
        showErrorMessage(phoneInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;
        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false
        }
        showErrorMessage(messageInput, null);
        return true;
    }

    // validate all together
    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidPhoneNumber = validatePhoneNumber();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidPhoneNumber && isValidMessage;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('Success!');
        }
    })

    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhoneNumber);
    messageInput.addEventListener('input', validateMessage);
    // TODO: need to add field validations

})()