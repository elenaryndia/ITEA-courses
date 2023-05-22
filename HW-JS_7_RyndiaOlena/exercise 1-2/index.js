/*Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days. */
class Workers{
    name;
    surname;
    rate;
    days;
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary;
    }
}
let workerOne = new Workers('Володимир', 'Зеленський', 150, 21);
document.write("<p>" + 'Задача 1');
document.write("<div>" + workerOne.name);
document.write("<div>" + workerOne.surname);
document.write("<li>" + 'Ставка - ' + workerOne.rate + '$');
document.write("<li>" + 'Відпрацьованих днів - '+ workerOne.days);
document.write("<li>" + 'Заробітня плата працівника становить - '+ workerOne.getSalary()+'$'+ '<hr>');

let workerTwo = new Workers('Леся', 'Українка', 20, 22);
document.write("<div>" + workerTwo.name);
document.write("<div>" + workerTwo.surname);
document.write("<li>" + 'Ставка - ' + workerTwo.rate + '$');
document.write("<li>" + 'Відпрацьованих днів - '+ workerTwo.days);
document.write("<li>" + 'Заробітня плата працівника становить - '+ workerTwo.getSalary()+'$'+ '<hr>');

/*Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.*/
class MyString {
    constructor() {
    }
    reverse(str) {
        let reversStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversStr += str[i];
        }
        return reversStr;
    }
    ucFirst(str) {
        let newStr = str[0].toUpperCase() + str.slice(1);
        return newStr;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let strArr = [];
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            strArr.push(newStr);
        }
        return strArr.join(' ');
    }

}
let str = new MyString();
document.write("<p>" + 'Задача 2'+ '<br>');
document.write("<div>" + 'Пригоди кролика почались'+ '<br>');
document.write("<li>"+ str.reverse('Пригоди кролика почались')+' - (повертає в перевернутому вигляді)'+ '<br>');
document.write("<li>"+ str.ucFirst('пригоди кролика почались')+' - (повертає, зробивши першу літеру великою)'+ '<br>');
document.write("<li>"+ str.ucWords('пригоди кролика почались')+' - (робить заголовною першу літеру кожного слова)'+'<hr>');




