const renderElement = ({ photo, title, price, colors, sizes, details }) => {
    let str = `
        <div class="filter-header container">
            <div class="heading">
            <img src="../image/Vector.png" alt="icon">
                <a class="heading-a" href="../index.html">
                    <p>&#127968 HOME &#10095;</p>
                </a>
                <a class="heading-a" href="./shorts.html">
                    <p>&#129651; SHORTS &#10095;</p>
                </a>
                <p class = "heading-a long">&#129651; ${title}</p>
            </div>
        </div>
        <div id="allData" class="container">
            <div class="allTop">
                <img class="frontImg" src="${photo}" alt="pants">
                <div class="allRight"> 
                    <h5 class="banner__content-title">${title}</h5>
                    <div class="wears-box-star"><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div><div><i class="fa fa-star"></i></div></div>
                    <p class="underStars">As low as
                        <span>₴${price}</span>
                    </p>
                    <div class="color">Color:
                        <span>${colors.map(el => `<div class="colourfull" style="background-color: ${el}; "></div>`).join('')}
                        </span >
                    </div>
                    <div class="color3">Sizes:
                        <span>${sizes}</span>
                    </div>
                    <div class="buttons">
                        <button class="chart big">
                            ADD TO CART
                        </button>
                        <img class="wishlist" src="../image/wishlist.png" alt="/">
                    </div>
                    <div class="social">
                        <a href="https://www.facebook.com/"><img src="../image/facebook1.png" alt="#"></a>
                        <a href="https://twitter.com/home"><img src="../image/twitter1.png" alt="#"></a>
                        <a href="https://www.pinterest.com/"><img src="../image/pinterest1.png" alt="#"></a>
                        <a href="/"><img src="../image/link1.png" alt="#"></a> 
                    </div>
                </div>
            </div>
            <div class="details">
                <h2>Product description:</h2>
                <p>${details}</p>
            </div>
        </div>`

    return str
};
let [...oneOf] = document.getElementsByClassName('color')

let main = document.getElementsByTagName('main')[0]

main.insertAdjacentHTML("afterbegin", renderElement(
    JSON.parse(localStorage.getItem('someCard'))
));  

//клік на кнопку корзини
let big = document.getElementsByClassName('big')[0]
big.addEventListener('click', checkBtn)

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

function checkBtn() {
    let content2 = JSON.parse(localStorage.getItem('someCard'));
    content3.push(content2)
    cont++
    localStorage.setItem('arrToBox', JSON.stringify(content3))
    boxSpan.textContent = cont
    localStorage.setItem('boxNumber', cont);
}



let burger = document.getElementById('burgerBtn')
let nav2 = document.getElementById('nav2')
let headerNav = document.getElementById('burgerMenu')

burger.addEventListener('pointerdown', () => {
    nav2.classList.toggle('hidden')
    headerNav.classList.toggle('header-nav')
    headerNav.classList.toggle('burger_menu')
})
    


