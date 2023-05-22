/*Створіть функцію-конструктор, яка створюватиме об'єкт Human (людина). Створіть масив об'єктів та реалізуйте функцію, яка сортуватиме елементи масиву за значенням властивості
вік за зростанням або за спаданням.*/
   

 const outThirdTask = document.querySelector('[data-third-task]');
 class Human {
    constructor (name , age){
        this.name = name;
        this.age = age;
        Human.container.push(this);
    }
    static container = [];
    static sortYear() {
        return Human.container.slice().sort((a, b) => a.age - b.age);
    }
}
// створення екземпляра класу
const human = new Human('Leo', 22);
const human1 = new Human('Pitter', 68);
const human2 = new Human('Kriss', 15);
const human3 = new Human('Lili', 92);
const human4 = new Human('Clara', 48);
// вивід інформації на сторінку
const resultThirdTask = document.createElement('div');
resultThirdTask.innerHTML = `Введені дані <li>${Human.container.map((i) => `ім'я:${i.name} вік:${i.age} `)}</li> <br> Cортування за віком <li>${Human.sortYear().map((i) => `ім'я:${i.name} вік:${i.age} `)}</li> `;
outThirdTask.append(resultThirdTask);

