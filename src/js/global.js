// JS MENU
// ==============
// STORE
// SWIPER
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';

// =============================
// SOUND
// =============================
const initSound = () => {
    const soundBtn = document.querySelector('.sound-btn');
    const sound = new Audio('../audio/given-up.mp3');

    const toggleSound = () => {
        soundBtn.classList.toggle('sound-btn--stop');

        !soundBtn.classList.contains('sound-btn--stop') ? sound.play() : sound.pause();
    };

    soundBtn.addEventListener('click', toggleSound);
    sound.play();
};

// =============================
// STEPS
// =============================
const initSteps = () => {
    const nextStepBtns = document.querySelectorAll('.js-next-step-btn');

    const changeStep = (nextStep) => {
        store.steps.forEach((step) => {
            const stepNumber = step.dataset.step;

            stepNumber === nextStep
                ? step.classList.add('step--active')
                : step.classList.remove('step--active');
        });
    };

    nextStepBtns.forEach((btn) => {
        btn.addEventListener('click', ({target}) => changeStep(target.dataset.nextStep));
    });
};

// =============================
// SWIPER
// =============================
const initSwiper = () => {
    const secondStep = [...store.steps].find((step) => step.classList.contains('step--two'));
    const swiperBlock = secondStep.querySelector('.swiper');
    const swiperBtnPrev = secondStep.querySelector('.swiper-button-prev');
    const swiperBtnNext = secondStep.querySelector('.swiper-button-next');

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

// =============================
// INIT PAGE
// =============================
const initPage = () => {
    initSound();
    initSteps();
    initSwiper();
};

// INIT PAGE
document.addEventListener('DOMContentLoaded', initPage);
