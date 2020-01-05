//Task 4:

const buyList = [
    {
        name: 'milk',
        count: 2,
        buy: true,
    },
    {   
        name: 'cheese',
        count: 5,
        buy: true,
    },
    {
        name: 'ice-cream',
        count: 1,
        buy: false,
    }
]


function sortList(arr) {
    arr.sort(function(a, b) { //сначала идут некупленные продукты, а потом – купленные
        return a.buy - b.buy;
    })
}


function addToList(itemName) {
    let index = buyList.findIndex(function(item) { 
        return item.name === itemName; 
    });

    if (index === -1) {
        buyList.push({
            name: itemName,//Доб покупки в список. При доб покупки увел кол в сущ покупке
            count: 0,
            buy: false,
        });
    } else {
        buyList[index].count++;
    }
}

function buyProduct(itemProduct) {
    
    let index = buyList.findIndex(function(item){
        return item.name === itemProduct;
    }); // Покупка. Функция принимает название продукта и отмечает его как купленный.

    if (index === -1) {
        console.log('Продукта нет')
    } else {
        buyList[index].buy = true;
        console.log('Продукт был куплен')
    }
    
}


buyProduct('milk')
buyProduct('cheese')
buyProduct('ice-cream')
addToList('apple');
addToList('pineapple');
addToList('pineapple');
addToList('banana'); 
addToList('banana'); 
addToList('banana'); 
addToList('banana');
addToList('milk');
addToList('cheese');
addToList('ice-cream');
addToList('milk');

console.log(buyList)
sortList(buyList)
console.log(buyList)
