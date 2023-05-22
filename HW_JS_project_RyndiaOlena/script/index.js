import data from "./catalog.js"

let [...buttons] = document.getElementsByClassName('chart')
buttons.forEach(el => {
    el.addEventListener('click', checkBtn)
})


//клік на кнопку корзини
let content3 = []
let boxSpan = document.getElementById('bagSpan')
let cont

if (localStorage.boxNumber == 'NaN' || localStorage.boxNumber == 0 || localStorage.boxNumber == undefined) {
    cont = 0;
    localStorage.setItem('boxNumber', 0);
    boxSpan.textContent = cont;
} else if (localStorage.boxNumber != 'NaN' || localStorage.boxNumber != 0) {
    boxSpan.textContent = cont = localStorage.boxNumber;
} 


if (localStorage.arrToBox == 0) {
    content3 = []
}else if (localStorage.arrToBox != undefined) {
    content3 = (JSON.parse(localStorage.getItem('arrToBox')))
}

function checkBtn(e) {
    if (e.target.localName === 'button') {
        let content2 = data.find((el) => el.id === e.target.closest('.pantsBox').id);
        content3.push(content2)
        cont++
        localStorage.setItem('arrToBox', JSON.stringify(content3))
        boxSpan.textContent = cont
        localStorage.setItem('boxNumber', cont);
    } else {
        return
    }
}

//клік на картку товару 
let pants = document.getElementsByClassName("pants")[0]
pants.addEventListener('click', (e) => {
    let content = data.find((el) => el.id === e.target.closest('.pantsBox').id);
    localStorage.setItem('someCard', JSON.stringify(content))
});


/*
localStorage.arrToBox = 0
localStorage.boxNumber = 0*/

let burger = document.getElementById('burgerBtn')
let nav2 = document.getElementById('nav2')
let headerNav = document.getElementById('burgerMenu')
burger.addEventListener('pointerdown', () => {
    nav2.classList.toggle('hidden')
    headerNav.classList.toggle('header-nav')
    headerNav.classList.toggle('burger_menu')
})



