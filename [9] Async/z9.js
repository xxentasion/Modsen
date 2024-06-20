"use strict";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Ошибка при загрузке данных: ${error.message}`);
        throw error;
    }
}

const url = "https://jsonplaceholder.typicode.com/posts/1"; 

fetchData(url)
    .then(data => {
        console.log("Данные загружены успешно:", data);
    })
    .catch(error => {
        console.error("Ошибка при загрузке данных:", error.message);
    });
