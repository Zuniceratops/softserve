const arr = [
    {name: 'Slava'},
    {name: 'Alisa'},
    {name: 'Dasha'},
    {name: 'Slava'},
    {name: 'Alisa'},
    {name: 'Dasha'}
];

let numBlock = document.querySelector('input');
let userList = document.querySelector('.user-list');

numBlock.addEventListener('keydown', function(event) {
    if(event.keyCode >= 48 && event.keyCode <= 57) {
        event.preventDefault();
        alert('введите буквенное значение')
    }

    let value = numBlock.value;
    let arrName = arr.filter(function(elem) {
        let name = elem.name.toLowerCase();
        let index = name.indexOf(value)
        if (index >= 0) {
            return true;
        } else {
            return false;
        }
    }) 
    
    // Clear old results
    userList.innerHTML = '';

    // Add new
    arrName.forEach(function(elem) {
        // const li = document.createElement('li');
        // li.innerHTML = elem.name;

        const cardElement = createCard(elem);
        console.log(cardElement)

        userList.appendChild(li);
    });
});



// const li = document.createElement('li')
// li.classList.add('li');
// li.innerHTML = ' ';

// const body = document.body;
// body.appendChild(li)

// console.log(li)