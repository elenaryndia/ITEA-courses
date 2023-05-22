/*Реалізуйте програму перевірки телефону
* Використовуючи JS Створіть поле для введення телефону та кнопку збереження
* Користувач повинен ввести номер телефону у форматі 000-000-00-00
* Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер правильний зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg якщо буде помилка, відобразіть її в діві до input.*/
saveButton = document.querySelector('[data-btn-save]');
const numberInput = document.querySelector('[data-phone]');
const imgOutput = document.querySelector('[data-phone-img]');

const phoneRegExp = /^\d{3}-\d{3}-\d{2}-\d{2}$/gm;

const error = document.createElement('p');

saveButton.addEventListener('click', () => {
    if (phoneRegExp.test(numberInput.value)) {
        numberInput.classList.add('green');
        document.location.href = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg';
        numberInput.value = '';
    } else {
        numberInput.classList.add('red');
        error.innerHTML = 'Не вірний формат';
        imgOutput.appendChild(error);
        numberInput.value = '';
    }
});

/*Створіть програму секундомір.
* Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
* При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий * Виведення лічильників у форматі ГГ:ХХ:СС
* Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції*/
const startButton = document.querySelector('[data-start]'),
    stopButton = document.querySelector('[data-stop]'),
    resetButton = document.querySelector('[data-reset]')
    const secondsOut = document.querySelector('[data-mSecond]'),
    minutesOut = document.querySelector('[data-second]'),
    hoursOut = document.querySelector('[data-minute]');
    const changeBackground = document.querySelector('.stopwatch-display');

  // memory for numbers
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

//stopwatch
startButton.addEventListener('click', () =>{
    clearInterval(interval);
    interval = setInterval(stopwatch, 1000);
    changeBackground.classList.add('green');
    changeBackground.classList.remove('red');
    changeBackground.classList.remove('silver');
});

stopButton.addEventListener('click', () =>{
    clearInterval(interval);
    changeBackground.classList.add('red');
    changeBackground.classList.remove('green');
    changeBackground.classList.remove('silver');
});

resetButton.addEventListener('click', () =>{
    clearInterval(interval);
    seconds = '00';
    minutes = '00';
    hours = '00';
    secondsOut.innerText = seconds;
    minutesOut.innerText = minutes;
    hoursOut.innerText = hours;
    changeBackground.classList.add('silver');
    changeBackground.classList.remove('green');
    changeBackground.classList.remove('red');
});

stopwatch = () => {
    seconds++;

    if(seconds <= 9){
        secondsOut.innerText = '0' + seconds;
    }
    if(seconds > 9){
        secondsOut.innerText = seconds;
    }
    if(seconds > 60){
        console.log('seconds');
        minutes++;
        minutesOut.innerText = `0${minutes}`;
        seconds = 0;
        secondsOut.innerText = '0' + 0;
    }

    if(minutes > 9){
        minutesOut.innerText = minutes;
    }

    if(minutes > 60){
        console.log('minutes');
        hours++;
        hoursOut.innerText = `0${hours}`;
        minutes = 0;
        minutesOut.innerText = '0' + 0;
    }

    if(hours > 9){
        hoursOut.innerHTML = hours;
    }
}