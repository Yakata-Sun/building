import checkNumber from './checkNumber';

const forms = (state) => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const statusMessage = {
    load: "Загрузка...",
    fail: "Что-то пошло не так...",
    ok: 'Ваше сообщение отправлено'
  };

  checkNumber('input[name="user_phone"]');

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = statusMessage.load;

    const res = await fetch(url, {
      method: "POST",
      body: data
    });

    return await res.text();
  };

  forms.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusM = document.createElement('div');
      statusM.classList.add("status");
      item.appendChild(statusM);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

console.log("FormData перед отправкой:");
for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

      postData("../mailer/smart.php", formData)
        .then(res => {
          console.log(res);
          statusM.textContent = statusMessage.ok;
        })
        .catch(() => statusM.textContent = statusMessage.fail)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusM.remove();
          }, 5000);
        });
    });
  });
};

export default forms