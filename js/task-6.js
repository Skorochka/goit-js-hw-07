const inputEl = document.querySelector('#validation-input')
const checkChange = inputEl.addEventListener('input', onInputChange)


function onInputChange(event) {

    if (event.currentTarget.value.length !== Number(inputEl.dataset.length)) {
        inputEl.classList.add('invalid'), inputEl.classList.remove('valid')
    } else {
        inputEl.classList.replace('invalid', 'valid') }
}

