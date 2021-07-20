const ref = {
    inputEl: document.querySelector('input[type="number"]'),
    btnRender: document.querySelector('button[data-action="render"]'),
    btnClean: document.querySelector('button[data-action="destroy"]'),
    divBoxes: document.querySelector('#boxes')
}

ref.btnRender.addEventListener('click', onHendlerBtnRenderClick)
ref.btnClean.addEventListener('click', onHendlerBtnCleanClick)

let defaultSize = 30;


function onHendlerBtnRenderClick(event) {
    const amount = +inputEl.value
    createBoxes(amount)
}

function createBoxes(amount) {
   const collection = amount.map(el => {
        const div = document.createElement('div');
        div.style.backgraundColor = 'green';
        div.style.width = defaultSize + 'px';
        div.style.height = defaultSize + 'px';
        defaultSize += 10
    })
    divBoxes.append(...collection)
}

function onHendlerBtnCleanClick() {}

