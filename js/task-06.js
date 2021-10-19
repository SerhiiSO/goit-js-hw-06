const symbolInput = document.querySelector('#validation-input');

function whenBlur(event) {
    symbolInput.classList.add('invalid');
    if (event.currentTarget.value.length*1 === symbolInput.dataset.length*1) {
        symbolInput.classList.replace('invalid', 'valid');
    }
}

symbolInput.addEventListener('blur', whenBlur);



