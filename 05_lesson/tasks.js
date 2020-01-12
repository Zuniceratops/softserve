//1. возведения числа в степень

function pow(x, y){
    if (y < 1) {
        console.log(`Степень ${y} не подходит, задайте натуральное число`);
        return;
    }
    // const result = Math.pow(x, y);

    let result = x;

    for (let i = 1; i < y; i++) {
        result *= x;
    }

    return result;
}
const result = pow(2, 4);
console.log(result);

//2.функция поиска наибольшего общего делителя

// function NOD(a, b) {
//     if (a > 0) {
//         return a;
//     } 
//     if ( a <= -1) {
//         // let a = a;
//         return a;
//     }
//     let num1 = a.length;
//     let num2 = Math.abs(a[0]);

//     for( let i = 1; i < num1; i++) {
//         let c = Math.abs(a[i])
//     }
//     return num2
// }
// NOD(10, 20)

//3. Написать функцию для поиска максимальной цифры в числе.

// function max(num) {
//     let result = -1;
//     for (let i = num; i > 0; i = Math.max(i/10)) {
//         let maxNum = i%10;
//         if(result < maxNum) {
//             result = maxNum;
//         }
//         return result;
//         console.log(result)
//     }
// max(1239)
//     if(num < 10) {
//         Max = num;
//     } else if {
//         10 > Max
//    