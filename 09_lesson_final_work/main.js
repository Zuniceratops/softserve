let numBlock = document.querySelector('input');
let cardList = document.querySelector('#card-list');
let timerId = null;

numBlock.addEventListener('input', function(event) {
  if(timerId) {
    clearTimeout(timerId);
  };

  let value = numBlock.value;

    if (value === '') {
        cardList.innerHTML = '';
        return;
    }

    timerId = setTimeout(async function() {
    // асинхронный запрос
      const response = await fetch(`https://api.github.com/search/users?q=${value}`);
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

