console.log(1);


import orderCalc from './modules/orderCalc';
import "./slider";
import modals from './modules/modal';
import forms from './modules/form';
import tabs from './modules/tabs';
import bigImg from './modules/bigImg';

window.addEventListener('DOMContentLoaded', () => {
  "use strict"

    let calcOrder = {};

    orderCalc(calcOrder);
    modals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modals('.phone_link', '.popup', '.popup .popup_close');
    modals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    modals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    modals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
   
    tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    bigImg();
    forms(calcOrder);
});