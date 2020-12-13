const body = document.body;
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach( e => {
    e.addEventListener('click', toggleMenu);
});

function toggleMenu () {
    hamburger.classList.toggle('hamburger--active');
    overlay.classList.toggle('overlay--active');
    body.classList.toggle('body--active-menu');
}; 

hamburger.addEventListener('click', toggleMenu);


// hamburger.addEventListener('click', (e) => {
//     clicked = !clicked;

//     if (clicked) {
//         hamburger.classList.add('hamburger--active');
//         menuList.classList.add('menu__list--active');
//         body.classList.add('body--active-menu');
//     } else {
//         hamburger.classList.remove('hamburger--active');
//         menuList.classList.remove('menu__list--active');
//         body.classList.remove('body--active-menu');
//     }
// });

var clicked = false;

const goodsOpenBtn = document.querySelector('#goods__composition-btn');
const goodsComponentList = document.querySelector('#goods__composition-block');

goodsOpenBtn.addEventListener('click', (e) => {
    clicked = !clicked;

    if (clicked) {
        goodsComponentList.style.visibility = "visible";
    } else {
        goodsComponentList.style.visibility = "hidden";
    }
})