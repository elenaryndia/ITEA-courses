import data from "./catalog.js"

let goods = document.getElementsByClassName('goods')[0]

let parts = function (arr) {
    //поділ массиву
    let pagination = document.getElementsByClassName('pagination')[0]
    let size = 10;
    let subarray = [];
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        subarray[i] = arr.slice((i * size), (i * size) + size);
    }
    pagination.innerHTML = ''
    //виведення номерів на сторінку
    if (subarray.length !== 1) {
        for (let i = 1; i <= subarray.length; i++) {
            pagination.insertAdjacentHTML('beforeend', `
            <div class="number">${[i]}</div>
            `)
        }
        pagination.insertAdjacentHTML('beforeend', `
            <div class="number arrow_pagination">
                <img src="../image/right.png" alt="">
            </div>
            `)
    }
    let count = 0

    //обробка кліку
    let [...number] = document.getElementsByClassName('number')
    number.forEach(el => {
        el.addEventListener('click', (e) => {
            if (e.target.localName === 'img' && count < 5) {
                count++
                goods.innerHTML = ''
                getGoods(subarray[count])
            } else if ((e.target.localName !== 'img')) {
                let int = parseInt(e.target.innerText)
                count = e.target.innerText
                goods.innerHTML = ''
                getGoods(subarray[int - 1])
            }
        })
    })
    //перше завантаження сторінки
    getGoods(subarray[0])
}
parts(data)


function getGoods(array) {
    array.forEach((el) => {
        const newCard = document.createElement('a');
        newCard.href = "goodPage.html"
        // newCard.target = "_blank"
        newCard.classList.add('pantsBox')
        newCard.classList.add('formal');
        newCard.id = el.id
        goods.appendChild(newCard);
        newCard.innerHTML = ''
        newCard.innerHTML = `
                    <img src="${el.photo}" alt="pants">
                    <h5>${el.title}</h5>
                    <div class="wears-box-star"><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div></div>
                    <p class="underStars">As low as <span>${el.price}₴</span></p>
                    <div class="color2">
                        ${el.colors.map(el => `<div class="colourfull" style="background-color: ${el}; "></div>`).join("")}
                    </div>
                    <h5 class="sizes">${el.sizes}</h5>
                    <a href="javascript://">
                        <button class="chart">
                            ADD TO CART
                        </button>
                    </a>
                    `
    });
}


let searchInput = document.querySelector(".filter-input");
searchInput.addEventListener("input", sortCloses);

let filterSizeContent = document.getElementsByClassName('filter-content')[0];
filterSizeContent.addEventListener('change', sortCloses, false);

['S', 'M', 'L', 'XL', '2XL', '3XL'].forEach((el) => {
    const someSize = document.createElement('label');
    someSize.insertAdjacentHTML('afterbegin', ` ${el}
            <input class="visually-hidden" type="checkbox" id="${el}">
        `)
    filterSizeContent.append(someSize);
});

let filterColorContent = document.getElementsByClassName('filter-content')[1];
filterColorContent.addEventListener('change', sortCloses);

['black', 'green', 'blue', 'grey', 'wheat', 'red', 'orange', 'yellow'].forEach((el) => {
    const someColor = document.createElement('div');
    someColor.insertAdjacentHTML('afterbegin', `<label style="background-color: ${el};" class="colourfull">
            <input class="visually-hidden" type="checkbox" id="${el}">
        </label>`)
    filterColorContent.append(someColor);
})

//клік на кнопку корзини
let content3
let boxSpan = document.getElementById('bagSpan')
let cont


if (localStorage.boxNumber == 'NaN' || localStorage.boxNumber == 0 || localStorage.boxNumber == undefined) {
    cont = 0;
    localStorage.setItem('boxNumber', 0);
    boxSpan.textContent = cont;
} else if (localStorage.boxNumber != 'NaN' || localStorage.boxNumber != 0) {
    boxSpan.textContent = cont = localStorage.boxNumber;
}



if (localStorage.arrToBox == undefined || localStorage.arrToBox == '0') {
    content3 = []
} else if (localStorage.arrToBox != undefined) {
    content3 = (JSON.parse(localStorage.getItem('arrToBox')))
}

function checkBtn(e) {
    if (e.target.localName === 'button') {
        let content2 = data.find((el) => el.id === e.target.closest('.pantsBox').id);
        content3.push(content2);
        cont++
        localStorage.setItem('arrToBox', JSON.stringify(content3))
        boxSpan.textContent = cont
        localStorage.setItem('boxNumber', cont);
    } else {
        return
    }
}

//клік на картку товару 
goods.addEventListener('click', (e) => {
    let content = data.find((el) => el.id === e.target.closest('.pantsBox').id);
    localStorage.setItem('someCard', JSON.stringify(content))
});

let [...buttons] = document.getElementsByClassName('chart')
buttons.forEach(el => {
    el.addEventListener('click', checkBtn)
})

//функція сортування
let score = []

function sortCloses(e) {
    let sortedArray = data;

    //масив значень фільтрації
    if (e.target.checked) {
        score.push(e.target.id)
    } else if (e.target.checked === false) {
        score.splice(score.indexOf(e.target.id), 1)
    }
    //перевірка розмірів
    ['S', 'M', 'L', 'XL', '2XL', '3XL'].forEach((size) => {
        if (score.includes(size)) {
            sortedArray = sortedArray.filter(el => el.sizes.includes(size))
            console.log(sortedArray)
        }
    });

    //перевірка кольорів
    ['black', 'green', 'blue', 'grey', 'wheat', 'red', 'orange', 'yellow'].forEach((color) => {
        if (score.includes(color)) {
            sortedArray = sortedArray.filter(el => el.colors.includes(color))
        }
    });

    //текстовий пошук
    sortedArray = sortedArray.filter(el => el.title
        .toLowerCase()
        .includes(searchInput.value
            .trim()
            .toLowerCase()));

    goods.addEventListener('click', checkBtn)

    let [...buttons] = document.getElementsByClassName('chart')
    buttons.forEach(el => {
        el.addEventListener('click', checkBtn)
    })
    goods.innerHTML = ''
    parts(sortedArray)
};
goods.addEventListener('click', sortCloses)

let burger = document.getElementById('burgerBtn')
let nav2 = document.getElementById('nav2')
let headerNav = document.getElementById('burgerMenu')
burger.addEventListener('pointerdown', () => {
    nav2.classList.toggle('hidden')
    headerNav.classList.toggle('header-nav')
    headerNav.classList.toggle('burger_menu')
})