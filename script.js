var age = +prompt('Введите ваш возраст:')

if(age <= 18) {
    alert('Вы ещё молоды, Вам нужно учиться.')
    console.log('Вы ещё молоды, Вам нужно учиться.');
}else if(age <= 50) {
    alert('Вам нужно работать.')
    console.log('Вам нужно работать.');
}else if(age <= 59) {
    alert('Вам скоро на пенсию')
    console.log('Вам скоро на пенсию');
}else if(age <= 100) {
    alert('Вы пенсионер')
    console.log('Вы пенсионер');
}else {
    alert('Что-то пошло не так')
}

