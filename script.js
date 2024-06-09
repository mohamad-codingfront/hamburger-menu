const menuBurger = document.querySelector('.menu-burger');
const list = document.querySelector('.list');
var bool = true;

menuBurger.addEventListener('click', () => {
    if (bool == true) {
        menuBurger.classList.add('open')
        list.style.top = 0
        bool = false;
    } else {
        menuBurger.classList.remove('open')
        list.style.top = '-10%'
        bool = true;
    }
})