/*
Використовуючи циклічні конструкції, пробіли &nbsp;,  зірочки * намалюйте 
Порожній прямокутник, трикутник та ромб 
*/
let lenght = 10;

/*Порожній прямокутник*/

for (let a = 0; a < lenght; a++) {
    if(a===0 || a===lenght-1){
        for (let i = 0; i < lenght; i++) {
            document.write("*");
        }
    }
   else{
        document.write("*");
        for (let i = 0; i < lenght-2; i++) {
            document.write("&nbsp&nbsp");
        }
        document.write("*"); 
    }
    document.write("<br>");
}


document.write("<br>");

/*трикутник*/
for (let a = 0; a < lenght; a++) {
    for (let i = 0+a; i < lenght; i++) {
        document.write("&nbsp");
    }
    for (let i = 0; i < a+1; i++) {
        document.write("*");
    }
document.write("<br>");
}

document.write("<br>");

/*ромб */
for (let a = 0; a < lenght; a++) {
    if(a>=0 && a<lenght/2){
        for (let i = 0+a; i < lenght/2; i++) {
             document.write("&nbsp");
         }
         for (let i = 0; i < a; i++) {
            document.write("*");
        }
    }
    else if(a===lenght/2){
        for (let i = 0; i < lenght/2; i++) {
            document.write("*");
        }
    }
    else if(a>lenght/2 && a<lenght){
        for (let i =lenght/2 +1; i < a+1; i++) {
            document.write("&nbsp");
        }
        for (let i =a; i <lenght; i++) {
            document.write("*");
        }
    }
   
document.write("<br>");
}
document.write("<br>");


/*Якщо змінна a дорівнює 10, то виведіть 'Вірно', інакше виведіть 'Неправильно'.*/
let a = parseInt(prompt("Введіть число 10"));
a===10 ? document.write("True") : document.write("Wrong");
document.write("<br>");
document.write("<br>");



/*У змінній min лежить число від 0 до 59. Визначте, в яку чверть години потрапляє це число
(У першу, другу, третю або четверту).*/

let min = parseInt(prompt("Введіть число від 0 дo 59"));

if(min>=0 && min<=15){
    document.write(`Число ${min} потрапляє в першу чверть`)
}
else if(min>=0 && min<=30){
    document.write(`Число ${min} потрапляє в другу чверть`)
}
else if(min>=0 && min<=45){
    document.write(`Число ${min} потрапляє в третю чверть`)
}
else if(min>=0 && min<=59){
    document.write(`Число ${min} потрапляє в четверту чверть`)
}
else{
    document.write(`Число ${min} не потрапляє в в жодну чверть`)
}
document.write("<br>");
document.write("<br>");


/*Змінна num може приймати 4 значення: 1, 2, 3 або 4. Якщо вона має значення '1',
то змінну result запишемо 'зима', якщо має значення '2' – 'весна' тощо.
Розв'яжіть завдання через switch-case. */

const num = prompt("Введіть число від 1 до 4");
let result;
switch (num) {
    case "1":
        result="зима";
        document.write(`${num} - ${result}`)
        break;
    case "2":
        result="весна";
        document.write(`${num} - ${result}`)
        break;
    case "3":
        result="літо";
        document.write(`${num} - ${result}`)
        break;
    case "4":
        result="осінь";
        document.write(`${num} - ${result}`)
        break;
    default:
        result="не знайдено";
        document.write(`${num} - ${result}`)
        break;
}
document.write("<br>");