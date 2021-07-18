const inputRangeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')


const changeFontSizeText = inputRangeEl.addEventListener('input', onChangeSizeText)

function onChangeSizeText(event) {
    const fontSize = Number(event.currentTarget.value)

    textEl.setAttribute(`style`, `font-size: ${fontSize}px`)

}