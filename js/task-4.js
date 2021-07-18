const refs = {
    btnDecrem: document.querySelector('button[data-action="decrement"]'),
    btnIncrem: document.querySelector('button[data-action="increment"]'),
    valueEl: document.querySelector('#value')

}

const counterValue = {
    value: 0,

    Decrement() {

    console.log('это клик по декрем')
        this.value -= 1
    },

    Increment() {
    console.log('это клик по инкрем')
    this.value += 1
    }
}


function onDecrementClick() {
    counterValue.Decrement()
    refs.valueEl.textContent = counterValue.value
}

function onIncrementClick() {
counterValue.Increment()
    refs.valueEl.textContent = counterValue.value
}

refs.btnDecrem.addEventListener('click', onDecrementClick)
refs.btnIncrem.addEventListener('click', onIncrementClick)

