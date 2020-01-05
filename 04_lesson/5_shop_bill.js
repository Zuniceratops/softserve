const books =  [
    {
        name: 'Vartovi',
        count: 10,
        price: 600,
    },
    {
        name: 'Kuklovodu',
        count: 3,
        price: 200,
    },
    {
        name: 'Lezvie britvu',
        count: 2,
        price: 700,
    },
    {
        name: 'Giperion',
        count: 6,
        price: 500,
    }
]


function showAll() {
    books.forEach(function(item) {
        console.log(`name: ${item.name}; count: ${item.count}; price: $${item.price}`);
    });
} //Распечатка чека на экран


function sumPrice() {
    let sum = books.reduce((sum, current) => sum + current.price, 0);
    console.log(`Total sum: $${sum}`);
};//Подсчет общей суммы покупки
 

function getBiggestPrice() {
    let result = 0;

    books.forEach(function(item) {
        if (result < item.price) {
            result = item.price;
        }
    });

    console.log(`The Biggest price: $${result}`);
}//Получение самой дорогой покупки в чеке

function sumMiddlePrice() {
    const sum = books.reduce((sum, current) => sum + current.price, 0);
    const result = sum / books.length;
    console.log(`Middle price: $${result}`);
}//Подсчет средней стоимости одного товара в чеке

showAll();
sumPrice();
getBiggestPrice();
sumMiddlePrice();
