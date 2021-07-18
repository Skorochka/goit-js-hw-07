const inputEl = document.querySelector('#validation-input')
const checkChange = inputEl.addEventListener('input', onInputChange)



function onInputChange(event) {
    console.log(event.currentTarget.value.length)
    if (event.currentTarget.value.length === 6) {
        inputEl.classList.add('valid')
    } else {inputEl.classList.replace('valid', 'invalid')}
}

