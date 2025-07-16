const forms = () =>{
  const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    statusMessage = {
      load: "Загрузка...",
      fail: "Что-то пошло не так...",
      ok: 'Ваше сообщение отправлено'
    };

    const clearInputs = () =>
      inputs.forEach(item => {
        item.value = '';
      })

    const postData = async (url, data) => {
      document.querySelector('.status').textContent = statusMessage.load;

        const res = await fetch(url, {
          method: "POST",
          body: data
        });
        return await res.text();
        
    }

    forms.forEach(item => {
      item.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusM = document.createElement('div');
        statusM.classList.add("status");
        item.appendChild(statusM);

        const formData = new FormData(item);

        postData("../mailer/smart.php", formData)
          .then(res => {
            console.log(res);
            statusM.textContent = statusMessage.ok;
          })
          .catch(() =>  statusM.textContent = statusMessage.fail)
          .finally(() => {
            clearInputs();
            setTimeout(() => {
              statusM.remove();
            }, 5000);
          });
      });

    });
}

export default forms