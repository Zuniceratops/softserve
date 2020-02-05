let numBlock = document.querySelector('input');
let cardList = document.querySelector('#card-list');
let spinner = document.querySelector('#spinner');
let warning = document.querySelector('#warning');
let timerId = null;


numBlock.addEventListener('input', function() {
  let value = numBlock.value;

  if (timerId) {
    clearTimeout(timerId);
  };

//очищаем строку ввода
  if (value === '') {
    cardList.innerHTML = '';
    return;
  }

  cardList.innerHTML = '';
  //запускаем в работу спиннер, который был скрыт
  spinner.classList.remove('d-none');
  //перехват ошибки в работающем коде
  warning.classList.add('d-none');
 
    timerId = setTimeout(async function() {
      // асинхронный запрос
      try {
         const response = await fetch(`https://1api.github.com/search/users?q=${value}`);
        const data = await response.json();

        let arrName = data.items.filter(function(elem) {
          let name = elem.login.toLowerCase();
          let index = name.indexOf(value);

          if (index >= 0) {
              return true;
          }

          return false;
        })
          
        // Clear old results
        cardList.innerHTML = '';

        // Add new users cards
        arrName.forEach(function(elem) {
          const card = createCard(elem);
          cardList.appendChild(card);
        });
      } catch(error) {
        warning.classList.remove('d-none');
      } finally {
        // spinner.classList.remove('d-none');
      };
    }, 400);
});


// Users cards
function createCard(data) {
    const card = document.createElement('div');
    card.style.width = '20rem';
    card.classList.add('card');

    card.innerHTML = `
        <img class="card-img-top" src="${data.avatar_url}" alt="${data.login}">
        <div class="card-body">
            <h5 class="card-title">${data.login}</h5>
            <a target="_blank" href="${data.html_url}" class="btn btn-primary">
                Go to Github profile
            </a>
        </div>`;
    return card;
}

