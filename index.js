'use strict';
const data = document.querySelector('#data')

let courses = [
    { name: "England", prices: [0, 100] },
    { name: "Germany", prices: [500, null] },
    { name: "Italy", prices: [100, 200] },
    { name: "Russia", prices: [null, 400] },
    { name: "China", prices: [50, 250] },
    { name: "USA", prices: [200, null] },
    { name: "1231Courses in USA", prices: [200, null] },
    { name: "Kazakhstan", prices: [56, 324] },
    { name: "France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
//Список отфильтрованных обьявлений
let itemsFilter = []

//Функция фильтрует список
const filterCurses = (filt) => {
  courses.forEach(item => {
  	if(filt[0] === item.prices[0] && filt[1] === item.prices[1]) {
  		const itemFilter = item.name + ' price = ' + item.prices[0] + ', ' + item.prices[1] + ';'
  		itemsFilter.push(itemFilter)
    };
  })
}

//Вызываем функцию фильтрации - в параметрах вариант фильтрации
filterCurses(requiredRange3)


//сортировка по ценам по начальной(первой цене в массиве)
const sortCourses = courses.sort((a, b) => b.prices[0] - a.prices[0])

//отрисовываем список
const showCurses = () => {
	var fragment = new DocumentFragment()

	for(let i = 0; i < itemsFilter.length; i++) {
		const li = document.createElement('li')
		li.innerText = itemsFilter[i]
		li.style.paddingTop = '10px'
		li.style.textDecoration = 'none'
		li.style.color = 'red'
		li.style.fontSize = '24px'
		fragment.append(li)
	}

	data.append(fragment)
}


showCurses()