/* Напишите функцию для расчета факториала числа. 
 Функция должна принимать число в качестве аргумента и возвращать его факториал. 
 Учтите использование строгого режима*/

"use strict";
function factorial(n) {
    if (n < 0) {
        throw new Error("Факториал не определен для отрицательных чисел");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
  

try {
    console.log(factorial(3));  // 6
} catch (error) {
    console.error(error.message);
}
