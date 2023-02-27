let parent = document.querySelector('.nav__list');
let element = document.querySelectorAll('.nav__item');
let btn = document.querySelector('#btn');
let form = document.querySelectorAll('#form');

parent.addEventListener('click', function (event) {
    let elem = event.target;
    for (let el of element) {
        el.classList.parentElement.remove('active');
        elem.classList.add('active');
    }
})

btn.addEventListener('click', function(){
    document.getElementById('form').style.display='block'
})


