"use strict";

function delayedCallback(callback) {
    if (typeof callback !== 'function') {
        throw new Error("Аргумент должен быть функцией");
    }
    setTimeout(callback, 2000);
}

function myCallback() {
    console.log("Callback функция вызвана через 2 секунды");
}

delayedCallback(myCallback);
