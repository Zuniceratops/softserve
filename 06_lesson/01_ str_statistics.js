const string = '"В эту зиму с ума я опять не сошел..." Иосиф Бродский, 1969'
let numCount = 0;
let letterCount = 0;
let simbCount = 0;

function statistics(str) {
    str = str.toLowerCase();
    const arr = str.split('');
    const length = arr.length;

    let numCount = 0;
    let letterCount = 0;
    let simbCount = 0;

    for (let i = 0; i < length; i++) {
        const el = arr[i];
        const code = el.codePointAt(0);
       
       
        if (el.trim() !== '' && !isNaN(el)) { //метод trim()-обрезает отступы у пробелов, т.к пустая строка = 0 и !isNAN принимает его за число
            numCount++;
        }

        if (el.trim() !== '' && (code >= 1040 && code <= 1103)) {
            letterCount++;
        } else {
            simbCount++; 
        }
    }
    
    console.log('Количество букв:', letterCount)
    console.log("Количество символов:", simbCount)
    console.log("Количество цифр:", numCount)
}




statistics(string)


// function statistics(str) {
//     for(let i=0, upper=0, lower=0, digits=0, symbols=0, char, all_letters = str.length; i < all_letters; i++) {
//         char = str.charAt(i);

//         if (char == char.toUpperCase()) {
//             upper++;
//         }
//         else if (char == char.toLowerCase()) {
//             lower++;
//         }
//         else if (!isNaN(char)) {
//             digits++;
//         }
//         else {
//             symbols++;
//         }
//     }
// }

