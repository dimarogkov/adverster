// JS MENU
// ==============
// STORE
// INIT PAGE
// ==============

// STORE
import {store} from './store.js';
const {main, sections, state} = store;

const initPage = () => {
    console.log(state.isMenuOpen);
};

// INIT PAGE
$(document).ready(() => initPage());
