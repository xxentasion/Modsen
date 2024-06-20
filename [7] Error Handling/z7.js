"use strict";

function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error("Параметр должен быть целым числом");
    }
    return `Число ${number} является целым числом.`;
}

try {
    console.log(checkInteger(10)); 
    console.log(checkInteger(10.5));
} catch (error) {
    console.error(error.message);  
}