console.log(1);



import "./slider";
import modals from './modules/modal';
import forms from './modules/form';
import tabs from './modules/tabs';
import bigImg from './modules/bigImg';

window.addEventListener('DOMContentLoaded', () => {
  "use strict"
    modals();
    forms();
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    bigImg();
});