function validateExpression() {
    const selectedExpression = document.getElementById('expressionType').value;
    const inputValue = document.getElementById('inputValue').value;
    const resultElement = document.getElementById('result');

    let pattern;
    let validationMessage;

    switch (selectedExpression) {
        case 'Email':
            pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            validationMessage = 'Invalid Email Address';
            break;
        case 'Phone Number':
            pattern = /^\+?(88)?0?1[3456789][0-9]{8}\b/; // For BD Phone Number
            validationMessage = 'Invalid phone number';
            break;
        case 'Postal Code':
            pattern = /^\d{4}$/;
            validationMessage = 'Invalid postal code';
            break;
        // You can add more cases for additional options here
        default:
            resultElement.textContent = 'Invalid option selected.';
            return;
    }

    if (pattern.test(inputValue)) {
        resultElement.textContent = `Valid ${selectedExpression}: ${inputValue}`;
    } else {
        resultElement.textContent = validationMessage;
    }
    
}



