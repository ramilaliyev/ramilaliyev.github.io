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

// const goodsOpenBtn = document.querySelector('.goods__composition-btn');
// const goodsComponentList = document.querySelector('.goods__composition-block');

// goodsOpenBtn.addEventListener('click', (e) => {
//     clicked = !clicked;

//     if (clicked) {
//         goodsComponentList.style.visibility = "visible";
//     } else {
//         goodsComponentList.style.visibility = "hidden";
//     }
// })

// Батончики - слайдер

$('.goods__composition-btn').click( e => {
    const $this = $(e.currentTarget);

    const block = $this.find('.goods__composition-block');

    clicked = !clicked;

    if (clicked) {
        block.css('visibility', 'visible');
    } else {
        block.css('visibility', 'hidden');
    }
});

// // // 

const slider = $('.goods__list').bxSlider({
    pager : false,
    controls: false,
    touchEnabled: false
}
);

$('.left-arrow-block').click((e) => {
slider.goToPrevSlide();
})

$('.right-arrow-block').click((e) => {
slider.goToNextSlide();
})

// // // // // // // // // // // // // // //

// Отзывы - слайдшоу

const findSlide = (e) => {
    return $('.reviews__item').filter((ndx, item) => {
        return $(item).attr('data-linked') === e;
    });
} 

$('.interactive-avatar__link').click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-link');
    const necessarySlide = findSlide(target);


    const curItem = $this.closest('.reviews__switcher-item');

    necessarySlide.addClass('reviews__item--active').siblings().removeClass('reviews__item--active');
    curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active');
});

// // // // // // // // // // // // // // //

// Команда - аккордеон

const openItem = e => {
    const container = e.closest('.team__item');
    const content = container.find('.team__content-wrapper');
    const textBlock = content.find('.team__content');
    const textBlockHeight = textBlock.height();

    e.find('.team__person-btn').addClass('team__person-btn--active');

    container.addClass('active-member');
    content.height(textBlockHeight);
}

const closeAllItems = container => {
    const items = container.find('.team__content-wrapper');

    container.find('.team__person-btn').removeClass('team__person-btn--active');

    const itemContainer = container.find('.team__item');

    itemContainer.removeClass('active-member');
    items.height(0);
}

$('.team__title').click((e) => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    
    const item = $this.closest('.team__item');
    
    if (item.hasClass('active-member')) {
        closeAllItems(container); 
    } else {
        closeAllItems(container);
        openItem($this);
    }
});

// // // // // // // // // // // // // // //

// Модальное окно на ванильном JS

const myForm = document.querySelector('.form');
const submitBtn = document.querySelector('.form__submit-btn');

submitBtn.addEventListener('click', e => {
    e.preventDefault();

    if (validateForm(myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: myForm.elements.to.value
        }

        // console.log(data);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            // console.log(xhr.status);

            const status = xhr.status;

            const responseForm = document.querySelector('.form-response');
            const modalResponse = document.querySelector('.modal__response');

            if (status < 400) {
                responseForm.classList.add('form-response--active');
                modalResponse.textContent = "Сообщение отправлено";
                modalResponse.classList.remove('post-error');
            } else {
                responseForm.classList.add('form-response--active');
                modalResponse.textContent = "Произошла ошибка. Повторите попытку позже";
                modalResponse.classList.add('post-error');
            }
        });

    }
});

const validateForm = form => {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false
    }

    if (!validateField(form.elements.phone)) {
        valid = false
    }

    if (!validateField(form.elements.comment)) {
        valid = false
    }

    if (!validateField(form.elements.to)) {
        valid = false
    }

    return valid;
};

const validateField = field => {
    if (!field.checkValidity()) {
        field.classList.add('field-error');
        return false;
    } else {
        field.classList.remove('field-error');
        return true;
    }
};


const modalCloseBtn = document.querySelector('.modal__close-btn');

modalCloseBtn.addEventListener('click', () => {
    const responseForm = document.querySelector('.form-response');
    responseForm.classList.remove('form-response--active');
});