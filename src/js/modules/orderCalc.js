import checkNumber from "./checkNumber";

const orderCalc = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumber('#width');
  checkNumber('#height');

  const changeState = (event, elements, prop) => {
    elements.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
              elements.forEach((box, j) => {
                box.checked = false;
                if (index === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  };

  changeState('click', windowForm, 'form');
  changeState('input', windowWidth, 'width');
  changeState('input', windowHeight, 'height');
  changeState('change', windowType, 'type');
  changeState('change', windowProfile, 'profile');
};

export default orderCalc;