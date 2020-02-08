let numBlock = document.querySelector('input');
let cardList = document.querySelector('#card-list');

let spinner = document.querySelector('#spinner');
let warning = document.querySelector('#warning');
let success = document.querySelector('#success');

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
  success.classList.add('d-none');
 
    timerId = setTimeout(async function() {
      // асинхронный запрос
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${value}`);
        const data = await response.json();

        //если юзер не найден
        if(data.items.length === 0) {
          success.classList.remove('d-none');
          return;
        }
        
        // Clear old results
        cardList.innerHTML = '';

        // Add new users cards
        data.items.forEach(function(elem) {
          const card = createCard(elem);
          cardList.appendChild(card);
        });
      } catch(error) {
        //если ошибка сервева
        warning.classList.remove('d-none');
      } finally {
        spinner.classList.add('d-none');
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

