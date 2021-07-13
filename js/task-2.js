const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const findList = document.querySelector('ul#ingredients')


const createItems = ingredients.map(ing => {
    const addItem = document.createElement('li')
    addItem.textContent = ing
    return addItem

})

findList.append(...createItems)

