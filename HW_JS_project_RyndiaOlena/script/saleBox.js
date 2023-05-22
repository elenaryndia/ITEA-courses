let bags = document.getElementsByClassName('bags')[0]
let total = document.querySelector('.total span')
const renderElement = (array) => {
    let count = 0
    array.forEach(element => {
        const newCard = document.createElement('div');
        newCard.classList.add('pantsBox')
        newCard.classList.add('formal');
        bags.appendChild(newCard);
        newCard.insertAdjacentHTML('afterbegin', `
                    <img src="${element.photo}" alt="pants">
                    <h5>${element.title}</h5>
                    <p class="underStars"><span>${element.price}₴</span></p>
                    <div class="color2">
                        ${element.colors.map(el => `<div class="colourfull" style="background-color: ${el}; "></div>`).join("")}
                    </div>
                    `)
        
        
        count += element.price
        total.textContent = `${count} ₴`
    })
};
renderElement(JSON.parse(localStorage.getItem('arrToBox')));


let zero = document.getElementById('delete')
zero.addEventListener('click', () => {
    bags.innerHTML = ""
    total.innerHTML = ""
    localStorage.setItem('arrToBox', 0)
    localStorage.setItem('boxNumber', 0);
})


let burger = document.getElementById('burgerBtn')
let nav2 = document.getElementById('nav2')
let headerNav = document.getElementById('burgerMenu')

burger.addEventListener('pointerdown', () => {
    nav2.classList.toggle('hidden')
    headerNav.classList.toggle('header-nav')
    headerNav.classList.toggle('burger_menu')
})
