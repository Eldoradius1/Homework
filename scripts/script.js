//В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
//При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)

const btn = document.querySelector('.btn');
const container = document.querySelector('#container');


btn.addEventListener('click', () => {
    const text = document.createElement('p');
    text.innerText = 'Чего не понимают, тем не владеют.';
    text.classList.add('text');
    text.style.color = 'green';
    container.append(text);

});

//Second level: ЗАДАЧА 2
//В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
//При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.