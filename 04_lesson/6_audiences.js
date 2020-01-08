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

    },
    {
        name: 'middle',
        count: 13,
    },
    {
        name: 'big',
        count: 16,
    },
    {
        name: 'biggest',
        count: 21,
    },
]

//Вывод на экран всех аудиторий
function showAll(){
    audiences.forEach(function(item) {
        console.log(`name: ${item.name}; count: ${item.count}; faculty: ${item.faculty}` )  
    });
}

// showAll();

//Вывод на экран аудиторий для указанного факультета
function audiencesForFsaculty(facultyName){
    let facultyGroup = audiences.filter(function(item){
        return item.faculty == facultyName;
    });
    console.log(facultyGroup)
}

audiencesForFsaculty('Pufenduy');
audiencesForFsaculty('Kogtevran');
audiencesForFsaculty('Gryffindor');
audiencesForFsaculty('Slizerin'); 

//Вывод на экран только тех аудиторий, которые подходят для переданной группы
function suitableAudiences(countPlaces) {
    let facultyCount = audiences.filter(function(item) {
        return item.count >= countPlaces;
    }); 
    console.log(facultyCount)
}
suitableAudiences(20)
suitableAudiences(15)
suitableAudiences(12)
suitableAudiences(10)

// //сортировка аудиторий по количеству мест
function sortAudiences(arr) {
    arr.sort(function(a, b) { 
        return a.count - b.count;
    });
    console.log(audiences)
}
sortAudiences(audiences); 

// //сортировка аудиторий по названию (по алфавиту)
function sortAlphabetName(arr) {
    arr.sort(function(a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();

        if (nameA < nameB) {
            return -1;
        };
        if (nameA > nameB) {
            return 1;
        };
    });
    console.log(audiences)
}
sortAlphabetName(audiences); 
