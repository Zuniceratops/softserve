// 1. Возраст

let age = prompt('Ваш возраст')
switch (true) {
    case (age <= 11):
      alert('Ребенок');
      break;
    case (age >= 12 && age <= 18):
      alert('Подросток');
      break;
    case (age >= 19 && age <= 60):
      alert('Взрослый');
      break;
    case (age >= 60):
      alert('Пенсионер');
      break;
}

// 2.Вывести спецсимвол

let num = prompt('Ввести число от 0 до 9')
switch (true) {
    case (num <= 0):
      alert(')');
      break;
    case (num <= 1):
      alert('!');
      break;
    case (num <= 2):
        alert('@');
        break;
    case (num <= 3):
        alert('#');
        break;
    case (num <= 4):
        alert('$');
        break;
    case (num <= 5):
        alert('%');
        break;
    case (num <= 6):
        alert('^');
        break;
    case (num <= 7):
        alert('&');
        break;
    case (num <= 8):
        alert('*');
        break;
    case (num <= 9):
        alert('(');
        break;
}

// 3.Ввести трехзначное число

let num = prompt('Ввести трехзначное число')

let num1 = parseInt(num /100);
let num2 = parseInt(num /10)%10;
let num3 = parseInt(num %10);
if(num1 === num2 || num2 === num3 || num1 === num3) 
alert('Найдено совпадение цифр');
else alert('Совпадений не найдено');

// 4.Укажите год 

let year = prompt('Укажите год')
if (year % 4 == 0) {
    alert('Высокосный год');
} else {
    alert('Невысокосный год');
}

// 5. 5-разрядное число

let num = prompt('Укажите 5-разрядное число')

let num1 = parseInt(num /10000);
let num2 = parseInt(num / 1000) % 100;
let num3 = parseInt(num / 100) % 10;
let num4 = parseInt(num % 10);

//  if (num > 9999 && num < 10000) {
//     alert('Это пятиразрядное число ');
//  }
 if ((num1 === num4)&&(num2 === num3)){
    alert("Это число палиндром");
 } else {
    alert("Это число не палиндром");
} 



// 6. Написать конвертор валют. 

let USD = prompt("Введите сумму в долларах");
let userCurrency = prompt("Укажите валюту(UA, EUR, AZN")
let UA = 23.23;
let EUR = 1.11;
let AZN = .59;

switch(userCurrency) {
    case 'UA': {
        let sum = USD * UA;
        alert(sum);
        break;
    }
    case 'EUR': {
        let sum = USD * EUR;
        alert(sum);
        break;
    }
    case 'AZN': {
        let sum = USD * AZN;
        alert(sum);
        break;
    }
}

//7. Cумма покупки 

let sum = prompt('Cумма покупки')

let discount1 = sum / 100 * 3;
let discount2 = sum / 100 * 5;
let discount3 = sum / 100 * 7;

if (sum >= 200 && sum <= 300) {
    alert(sum - discount1);
}
if (sum >= 300 && sum <= 500) {
    alert(sum - discount2);
}
if (sum > 500) {
    alert(sum - discount3);
}

//8. Запросить длину окружности и периметр квадрата.
let circleLength = prompt('Введите длину окружности')
let perimeterSquare =  prompt('Введите периметр квадрата')

if (circleLength * perimeterSquare * Math.PI / 4){
    alert('окружность поместится в указанный квадрат')      //НЕ ГОТОВО
} else if(circleLength > perimeterSquare){
    alert('окружность не поместится в указанный квадрат')
}

//9.
let ocean = prompt('Сколько на Земле океанов? 1 - 4 2 - 5 3 - 6');
let saturn = prompt('Сатурн какая по счету планета от Солнца? 1 - 5 2 - 6 3 - 7');
let ag = prompt('Ag химическое обозначение какого элимента? 1 - Золото 2 - Серебро 3 - Платина');
let sum = 0;

if (ocean == 2) {
    sum += 1;
}
if (saturn == 2) {
    sum += 1;
}
if (ag == 2) {
    sum += 1;
}
alert('Твой балл' + sum)

//10.  НЕ ГОТОВО


// let day = prompt('Введите день')
// let month = prompt('Введите месяц')
// let year = prompt('Введите год')
// console.log(day)
// day++
// // alert(day) 
// if(day <= 28){
//     alert(day) 
// } else if (year % 4 == 0) {
//     day < 30, 31;
//     alert(day) 
// }

