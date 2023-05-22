//exercise 1
//Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою

const dataExercise1 = document.querySelector('[data-exrcise1]');
const exercise1Name = document.querySelector('[data-input1]');
const button1 = document.querySelector('[data-button1]');
function dayOfWeek(day){
  switch(day) {
    case 1: return "Понеділок";
    case 2: return "Вівторок";
    case 3: return "Середа";
    case 4: return "Четвер";
    case 5: return "П'ятниця";
    case 6: return "Субота";
    case 7: return "Неділя";
    default : return "Ви ввели не вірне число";
  }}
   button1.addEventListener('click', () => dataExercise1.innerHTML = `Відповідь: ${dayOfWeek(parseInt(exercise1Name.value))}`);
  

//exercise 2
//Створіть функцію, яка заповнюватиме масив 10-ма іксами за допомогою циклу.
const dataExercise2 = document.querySelector('[data-exrcise2]');
const button2 = document.querySelector('[data-button2]');
let arr1 = [];

function fillArray (symbol) {
    for (let i = 0; i < 10; i++) {
        arr1.push(symbol);
    }
}
fillArray('x');

button2.addEventListener('click', () => dataExercise2.innerHTML = `Відповідь: ${arr1}`);

//exercise 3
/*Створіть функцію яка буде приймати від користувача ім'я, прізвище, дату народження. 
Та повертатиме дів на сторінку з цими даними у вигляді карточки*/
const dataExercise3 = document.querySelector('[data-exrcise3]');
const exerciseName = document.querySelector('[data-inputName]');
const exerciseLastName = document.querySelector('[data-inputLastName]');
const exerciseDate = document.querySelector('[data-inputDate]');
const button3 = document.querySelector('[data-button3]');

function personCard (name, surName, date, outPlace) {
    let output = document.createElement('div');
    output.innerHTML = `<p class="name">${name}</p><p class="surName">${surName}</p><p class="date">${date}</p>`;
    return outPlace.append(output);
}

button3.addEventListener('click', () => personCard(exerciseName.value, exerciseLastName.value, exerciseDate.value.split('-').reverse().join('.'), dataExercise3));

//exercise 4
//Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!
const dataExercise4 = document.querySelector('[data-exrcise4]');
const exercise4Name = document.querySelector('[data-input4]');
const button4 = document.querySelector('[data-button4]');

function point (a) {
    if (a < 0) {
        return ('!!');
    } else if (a > 0) {
        return ('!');
    }
}

button4.addEventListener('click', () => dataExercise4.innerHTML = `Відповідь: ${point(exercise4Name.value)}`);

//exercise 5
/*Написати функцію, яка отримує на вхід два числа. Якщо обидва числа парні - функція повертає їхнє твір.
 Якщо обидва числа непарні – функція повертає їхню суму. 
 Якщо одне із чисел парне, а друге непарне - функція повертає це непарне число.*/
 const dataExercise5 = document.querySelector('[data-exrcise5]');
 const exercise5_1Name = document.querySelector('[data-input5_1]');
 const exercise5_2Name = document.querySelector('[data-input5_2]');
 const button5 = document.querySelector('[data-button5]');

 function expression (num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
        return num1 * num2;
    } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
        return num1 + num2;
    } else if (num1 % 2 === 0 && num2 % 2 !== 0) {
        return num2;
    } else if (num1 % 2 !== 0 && num2 % 2 === 0) {
        return num1;
    } else {
        return ('помилка введення');
    }
}
button5.addEventListener('click', () => dataExercise5.innerHTML = expression(parseInt(exercise5_1Name.value), parseInt(exercise5_2Name.value)));

//exercise 6
/*Напишіть функцію range(), яка приймає два аргументи: початок і кінець діапазону, 
і повертає масив, який містить усі числа з діапазону, включаючи початкове та кінцеве. 
Третій необов'язковий аргумент функції range() – крок для побудови масиву. 
Переконайтеся, що функція range() працює з негативним кроком: наприклад, range(5, 2, -1) повертає [5, 4, 3, 2].*/
const dataExercise6 = document.querySelector('[data-exrcise6]');
const exercise6Name = document.querySelector('[data-input6]');
const exercise6_1Name = document.querySelector('[data-input6_1]');
const exercise6_2Name = document.querySelector('[data-input6_2]');
const button6 = document.querySelector('[data-button6]');

const arr2=[];

function range(start, end, step ){
    if (start >= end && step !== 0) {
        for (let i = start; i >= end; i-= Math.abs(step)) {
            arr2.push(i);
        }
    } else if (start <= end && step !== 0) {
        for (let i = start; i <= end; i+= Math.abs(step)) {
            arr2.push(i);
        }
    } else if (start >= end && step === 0){
        s++;
        for (let i = start; i >= end; i-= Math.abs(step)) {
            arr2.push(i);
        }
    } else if (start <= end && step === 0) {
        step++;
        for (let i = start; i <= end; i+= Math.abs(step)) {
            arr2.push(i);
        }
    }
}
button6.addEventListener('click', () => {
    range(parseInt(exercise6Name.value), parseInt(exercise6_1Name.value), parseInt(exercise6_2Name.value));
    dataExercise6.innerHTML = `Відповідь: [${arr2}]`;
  
});