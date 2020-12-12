const body = document.body;
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');


var clicked = false;

hamburger.addEventListener('click', (e) => {
    clicked = !clicked;

    if (clicked) {
        hamburger.classList.add('hamburger--active');
        menuList.classList.add('menu__list--active');
        body.classList.add('body--active-menu');
    } else {
        hamburger.classList.remove('hamburger--active');
        menuList.classList.remove('menu__list--active');
        body.classList.remove('body--active-menu');
    }
});



const goodsOpenBtn = document.querySelector('#goods__composition-btn-icon');
const goodsComponentList = document.querySelector('#goods__composition-block');

goodsOpenBtn.addEventListener('click', (e) => {
    clicked = !clicked;

    if (clicked) {
        goodsComponentList.style.visibility = "visible";
    } else {
        goodsComponentList.style.visibility = "hidden";
    }
})