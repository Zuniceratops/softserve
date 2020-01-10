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
