/*
* У папці calculator дана верстка макета калькулятора. 
Потрібно зробити цей калькулятор робочим.
* При натисканні на клавіші з цифрами - набір введених цифр має бути показаний на табло калькулятора.
* При натисканні на знаки операторів (`*`, `/`, `+`, `-`) на табло нічого не відбувається - програма чекає введення другого числа для виконання операції.
* Якщо користувач ввів одне число, вибрав оператор і ввів друге число, то при натисканні як кнопки `=`, так і будь-якого з операторів, в табло повинен з'явитися результат виконання попереднього виразу.
* При натисканні клавіш `M+` або `M-` у лівій частині табло необхідно показати маленьку букву `m` - це означає, що в пам'яті зберігається число. Натискання на MRC покаже число з пам'яті на екрані. Повторне натискання `MRC` має очищати пам'ять.
*/

/*
1. Зєжнати верстку з джс 
Потрібно зробити цей калькулятор робочим.
2. Знайти всі кнопки та спрбувати їх вивести у консоль
3. Записти перші числа в память коду 
4. вивести числа на екран
5. додати знаки ар. операцій 
6. Знайти другі числа 
7. Вивести другі числа 
8. Вивести результат операції
*/
// змінні
const d = document.querySelector(".display input");
const memoryIcon = document.querySelector(".memory-icon");
// об'єкт зберігання всіх даних
const calculate = {
    operand1 : "",
    sign : "",
    operand2 : "",
    rez : "",
    mem: ""
}
// лічильник для кнопки пам'яті
let count = 0;
// https://regexr.com/

document.querySelector(".keys").addEventListener("click", (e) => {
    if(validate(/\d/, e.target.value) && calculate.sign === '' && calculate.operand2 === '') { // визначаємо перший операнд і записуємо
        calculate.operand1 += e.target.value;
        show(calculate.operand1);
    }else if(validate(/^[+\-/*]$/, e.target.value) && calculate.operand2 === '' && calculate.operand1 !== '') { // визначаємо операцію і записуємо
        calculate.sign = e.target.value;
    }else if (validate(/^C$/, e.target.value)) { // кнопка очищення всіх даних
        clearAll(calculate);
        show('');
    }else if (calculate.operand1 !== '' && calculate.sign !== '' && validate(/\d/, e.target.value)) { // знаходимо і записуємо другий операнд
        show('');
        calculate.operand2 += e.target.value;
        show(calculate.operand2);
    }else if ((validate(/^=$/, e.target.value) && calculate.operand2 !== '')){ // проводимо обрану мат операцію по натисканню дорівнює
        calcNumber (calculate.sign);
        calculate.operand1 = calculate.rez;
        calculate.operand2 = '';
        calculate.sign = '';
        count = 0;
    } else if (validate(/^[+\-/*]$/, e.target.value) && calculate.operand2 !== '') {// проводимо обрану мат операцію, якщо натиснуто операнд
        calcNumber (calculate.sign);
        calculate.sign = e.target.value;
        calculate.operand1 = calculate.rez;
        calculate.operand2 = '';
        count = 0;
    } else if (validate(/^\.$/, e.target.value) && calculate.operand1 !== '' && calculate.operand2 === '' && !calculate.operand1.includes('.')) { // Визначаємо . для першого операнда
        calculate.operand1 += e.target.value;
        show(calculate.operand1);
    } else if (validate(/^\.$/, e.target.value) && calculate.operand1 !== '' && calculate.operand2 !== '' && !calculate.operand2.includes('.')) {// Визначаємо . для другого операнда
        calculate.operand2 += e.target.value;
        show(calculate.operand2);
    } else if ((validate(/^m\+$/, e.target.value) || validate(/^m-$/, e.target.value)) && d.value !== '') { // якщо натисли м+-. заносимо в пам'ять
        memoryIcon.style.opacity = '1';
        calculate.mem = d.value;
        count = 0;
    } else if (validate(/^mrc$/, e.target.value) && calculate.mem !== '') { // якщо натисли mrc, визначає в який момент і робимо необхідну дію
        show(calculate.mem);
        count++;
        if (calculate.operand1 !== '' && calculate.operand2 === '' && calculate.sign !== '') {
            calculate.operand2 = calculate.mem;
            count--;
            count++;
        }
        if (calculate.operand1 !== '' && calculate.operand2 === '' && calculate.sign === '') {
            calculate.operand1 = calculate.mem;
            count--;
            count++;
        }
        if (calculate.operand1 === '' && calculate.operand2 === '' && calculate.sign === '') {
            calculate.operand1 = calculate.mem;
            count--;
            count++;
        }
        if (count === 2) {
            count = 0;
            memoryIcon.style.opacity = '0';
            calculate.mem = '';
        }
    }

})
// ф-ція виводу на екран
function show (v) {
    d.value = v;
}
// перевірка введених даних через регулярний вираз
const validate = (r, v) => r.test(v);
// кнопка очищення
function clearAll(c) {
    for (let key in c) {
        if (key !== 'mem') {
            c[key] = '';
        }
    }
}
// проводимо математичні операції, toFixed - використано для прибирання неточності у вигляді використання 64-битного формату IEEE-754.
function calcNumber (s) {
    switch(s) {
        case '+':
            calculate.rez = parseFloat(calculate.operand1) + parseFloat(calculate.operand2);
            show('');
            show(+calculate.rez.toFixed(5));
            break;
        case '-':
            calculate.rez = parseFloat(calculate.operand1) - parseFloat(calculate.operand2);
            show('');
            show(+calculate.rez.toFixed(5));
            break;
        case '*':
            calculate.rez = parseFloat(calculate.operand1) * parseFloat(calculate.operand2);
            show('');
            show(+calculate.rez.toFixed(5));
            break;
        case '/':
            if (calculate.operand2 === '0') {
                show('Error');
                clearAll(calculate);
                return;
            }
            calculate.rez = parseFloat(calculate.operand1) / parseFloat(calculate.operand2);
            show('');
            show(+calculate.rez.toFixed(5));
            break;
    }
}