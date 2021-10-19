const nameInput = document.querySelector('#name-input')
const helloOutput = document.querySelector('#name-output')

function eventEl(event) {
    if (event.currentTarget.value != '') {
        return helloOutput.textContent = event.currentTarget.value;
    }
    return helloOutput.textContent = 'Anonymous';
}

nameInput.addEventListener('input', (eventEl));