const audiences = [
    {
        name: 'Blue',
        count: 20,
        faculty: 'Kogtevran',
    },
    {
        name: 'Yellow',
        count: 15,
        faculty: 'Pufenduy',
    },
    {
        name: 'Red',
        count: 12,
        faculty: 'Gryffindor',
    },
    {
        name: 'Green',
        count: 10,
        faculty: 'Slizerin',
    },
    {
        name: 'small',
        count: 11,
        faculty: 'Slizerin',
    },
    {
        name: 'middle',
        count: 13,
        faculty: 'Gryffindor',
    },
    {
        name: 'big',
        count: 16,
        faculty: 'Pufenduy',
    },
    {
        name: 'biggest',
        count: 20,
        faculty: 'Kogtevran',
    },
]

function showAll(){
    audiences.forEach(function(item) {
        console.log(`name: ${item.name}; count: ${item.count}; faculty: ${item.faculty}` )  
    });
}

showAll();

function audiencesForFsaculty(facultyName){
    let facultyGrup = audiences.filter(function(item){
        return item.faculty == facultyName;
    });
    console.log(facultyGrup)
}

audiencesForFsaculty('Pufenduy');
audiencesForFsaculty('Kogtevran');
audiencesForFsaculty('Gryffindor');
audiencesForFsaculty('Slizerin');

function sortAudiences(arr) {
    arr.sort(function(a, b) { 
        return a.count - b.count;
    });
    console.log(audiences)
}
sortAudiences(audiences);

// function sum(name, surname) {
//     let fullName = name + ' ' + surname;
//     return fullName;
// }
// let ivanName = 'Ivan';
// let ivanSurname = 'Ivanovich';
// let ivanFullName = sum(ivanName,ivanSurname);

// console.log(ivanFullName);

// function greet(name, day) {
//     console.log('привет '+ name);
//     if (day == 'суббота'){
//         console.log('хорошо тебе')
//     } else {
//         console.log('работай')
//     }
// }
// greet('Егор', 'суббота')

function hh(num1, num2) {
   console.log(num1+num2);
}
hh(2, 5)