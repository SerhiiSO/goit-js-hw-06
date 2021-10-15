const validationEl = document.querySelector('.login-form')
validationEl.addEventListener('submit', loginFormSubmit);

function loginFormSubmit(event) {
    event.preventDefault();
    const dataFormResult = {};

    if (event.currentTarget.elements.email.value === '' ||
       event.currentTarget.elements.password.value === '')
    {
        return alert('All fields must be filled');
    }
     const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        dataFormResult[name] = value;
        
    });
    
    console.log(dataFormResult);
    validationEl.reset();
}