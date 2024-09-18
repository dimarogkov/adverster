// JS MENU
// ==============
// STORE
// SWIPER
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';
const {sections, state} = store;

// =============================
// SWIPER
// =============================
const initSwiper = () => {
    const swiperBlock = sections.stepTwo.querySelector('.swiper');
    const swiperBtnPrev = sections.stepTwo.querySelector('.swiper-button-prev');
    const swiperBtnNext = sections.stepTwo.querySelector('.swiper-button-next');

    const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 700,
        autoHeight: true,
        loop: true,
        navigation: {
            prevEl: swiperBtnPrev,
            nextEl: swiperBtnNext,
        },
    };

    new Swiper(swiperBlock, swiperOptions);
};

const initPage = () => {
    console.log(sections.steps);
    initSwiper();
};

// INIT PAGE
document.addEventListener('DOMContentLoaded', initPage);
