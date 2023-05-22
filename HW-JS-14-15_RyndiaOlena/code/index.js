/*
Зробити програму з навігаційним меню яке буде показувати один з варіантів. 
Курс валют НБУ з датою на який день, 
героїв зоряних війн, 
список справ з https://jsonplaceholder.typicode.com/виводити які виконані які та які ні з можливістю редагування
*/

const [...navItems] = document.querySelectorAll("#nav > li"),
    links = {
        nbu: "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json",
        swapi: "https://swapi.dev/api/people/",
        swapiNext: "",
        swapiPrev: "",
        list: "https://jsonplaceholder.typicode.com/todos"
    },
    loader = document.querySelector(".loader")

const req = async url => {
    const data = await fetch(url);
    return data.json()
}
//Перебираємо кожну li
navItems.forEach((li) => {
    li.addEventListener("click", function() {
        loader.classList.add("active");
            //Робимо запит з отриманням даних від сервера
        switch (this.dataset.validate) {
            case "nbu":
                req(links.nbu)
                    .then(d => show(d, this.dataset.validate))
                    .catch(info => console.error(info))
                return
            case "swapi":
                req(links.swapi)
                    .then(d => show(d, this.dataset.validate))
                    .catch(info => console.error(info))
                return
            case "list":
                req(links.list)
                    .then(d => show(d, this.dataset.validate))
                    .catch(info => console.error(info))
                return
        }
    })
})

// кнопки перемикання
let count = 1;

const nextButton = document.querySelector('.pagination__arrow_next'),
    prevButton = document.querySelector('.pagination__arrow_prev'),
    numberPage = document.querySelector('.pagination__list span'),
    pagination = document.querySelector('.pagination');

numberPage.innerText = count;

nextButton.addEventListener('click', () => {
    if (nextButton.dataset.validate === "swapi" && links.swapiNext !== '' && links.swapiNext !== null) {
        loader.classList.add("active");
        count += 1;
        numberPage.innerText = count;
                req(links.swapiNext)
                    .then(d => show(d, nextButton.dataset.validate))
                    .catch(info => console.error(info))
    }
});

prevButton.addEventListener('click', () => {
    if (nextButton.dataset.validate === "swapi" && links.swapiPrev !== '' && links.swapiPrev !== null) {
        loader.classList.add("active");
        count -= 1;
        numberPage.innerText = count;
                req(links.swapiPrev)
                    .then(d => show(d, nextButton.dataset.validate))
                    .catch(info => console.error(info))
    }
});

//Вивід інформації з сервера
function show(data, target) {
    loader.classList.remove("active")
    pagination.classList.remove('active');
    if (target === 'list') {
            const taskList = `
                <table class="task-list">
                <thead><tr><th>№</th><th>Що зробити</th><th>Статус</th><th>Редагувати</th><th>Зберешти</th></tr></thead>
                 <tbody>
                ${Array.isArray(data) ?
                        data.map((el) => {
                            return  `<tr><td>${el.id}</td><td>${el.title}</td><td>${el.completed ? "&#9989;" :"&#10060;"}</td><td>+++</td><td>---</td></tr>`
                        }).join("")
                        : ""}
                        </tbody>
                </table>
        `
            document.querySelector(".info").innerHTML = '';
            document.querySelector(".info").insertAdjacentHTML("beforeend", taskList);
    }
    if (target === 'nbu') {
            const taskList = `
                <table class="task-list">
                    <thead><tr><th>Код</th><th>Назва валюти</th><th>Скорочення</th><th>Курс</th><th>Дата</th></tr></thead>
                     <tbody>
                    ${Array.isArray(data) ?
                data.map((el) => {
                            return  `<tr><td>${el.r030}</td><td>${el.txt}</td><td>${el.cc}</td><td>${el.rate.toFixed(3)}</td><td>${el.exchangedate}</td></tr>`
                        }).join("")
                        : ""}
                            </tbody>
                </table>
    `
        document.querySelector(".info").innerHTML = '';
        document.querySelector(".info").insertAdjacentHTML("beforeend", taskList);
    }
    if (target === 'swapi') {
        pagination.classList.add('active');
        loader.classList.remove("active");
        let res ;
        Object.keys(data).forEach(key => {
            if (key === 'results') {
                res = data[key];
            }
            if (key === 'next') {
                links.swapiNext = data[key];
            }
            if (key === 'previous') {
                    links.swapiPrev = data[key];
            }
        });
        const taskList = `
        <table class="task-list">
        <thead><tr><th>Ім'я</th><th>Стать</th><th>Зріст</th><th>Вага</th><th>Колір шкіри</th></tr></thead>
        <tbody>
        ${Array.isArray(res) ?
            res.map((el) => {
                return  `<tr><td>${el.name}</td><td>${el.gender}</td><td>${el.height}</td><td>${el.mass}</td><td>${el.skin_color}</td></tr>`
            }).join("")
            : ""}
                </tbody>
        </table>
        `
        document.querySelector(".info").innerHTML = '';
        document.querySelector(".info").insertAdjacentHTML("beforeend", taskList);
    }
}
