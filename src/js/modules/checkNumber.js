const checkNumber = (selector) => {
  const check = document.querySelectorAll(selector);

  check.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
  })
});
};

export default checkNumber;