/*Створіть 5 дівів на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дивам колір фону.*/
const outputCreatBlock = document.querySelector('[data-first]');
const blockNumber = document.querySelector('[data-number]');
const colorOfBlock = document.querySelector('[data-color]');
const colorChange = document.querySelector('[data-color-change]');
const button1 = document.querySelector('[data-button1]');
const button2 = document.querySelector('[data-button2]');

button1.addEventListener('click', () => {
    for (let i = 0; i < blockNumber.value; i++) {
        if (parseInt(blockNumber.value) > 0 && parseInt(blockNumber.value) < 30) {
            const div = document.createElement('div');
            div.classList.add('block');
            div.setAttribute("style", `background-color:${colorOfBlock.value}`);
            outputCreatBlock.append(div);
        } else {
            alert('Error:');
          
        }
    }
    
})

button2.addEventListener('click', () => {
    const [...list] = outputCreatBlock.children;
    list.forEach((e) => {
        e.style.backgroundColor = `${colorChange.value}`;
    })
});
/*
2. Створіть картинку та кнопку з назвою "Змінити картинку"
зробіть так щоб при завантаженні сторінки була картинка
https://itproger.com/img/courses/1476977240.jpg
При натисканні на кнопку вперше картинка замінилася на
https://itproger.com/img/courses/1476977488.jpg
при другому натисканні щоб картинка замінилася на
https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png
*/
const image = document.querySelector('[data-image]');
const button3 = document.querySelector('[data-button3]');

let i = 0;
const img = ['https://itproger.com/img/courses/1476977240.jpg', 'https://itproger.com/img/courses/1476977488.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'];
button3.addEventListener('click', () => {
    if (i !== (img.length - 1)) {
        i++;
        image.src = img[i];
    } else if (i === 2) {
        i = 0;
        image.src = img[i];
    }
});

//Задача 3. Створіть на сторінці 10 параграфів і зробіть так, щоб при натисканні на параграф він зникав
const outputParagraph = document.querySelector('[data-paragraph]');
const paragraphNumber = document.querySelector('[data-number-paragraph]');
const button4 = document.querySelector('[data-button4]');

button4.addEventListener('click', () => {
    for (let i = 0; i < paragraphNumber.value; i++) {
        if (parseInt(paragraphNumber.value) > 0 && parseInt(paragraphNumber.value) < 30) {
            const paragrh = document.createElement('p');
            paragrh.classList.add('paragraph');
            paragrh.innerHTML = `Параграф номер ${i + 1}  <li class="delete">&#10007;</li>`;
            outputParagraph.append(paragrh);
            // видалення параграфу
            const deleteElement = document.querySelectorAll(".delete");
            for(let d=0; d<deleteElement.length; d++){
                deleteElement[d].onclick = function(){
                    this.parentNode.remove();
                }
            }
        } else {
            alert('Error: ');
        }
    }
    
})

