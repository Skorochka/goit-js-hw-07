const item = document.querySelectorAll('.item')
const numberOfCategories = element => `В списке ${item.length} категории`
console.log(numberOfCategories(item))
const categoriesEl = element => element.forEach(el => console.log(`Категория: ${el.querySelector('h2').textContent}. Количество элементов: ${el.querySelectorAll('li').length}`))

categoriesEl(item)






