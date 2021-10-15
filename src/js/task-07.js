const sizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');


function changeSizeEl(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}

sizeEl.addEventListener('input', changeSizeEl)