/*Створіть функцію-конструктор, яка буде створювати об'єкт Human (людина), додайте на власний розсуд властивості та методи в цей об'єкт. Подумайте, які методи та властивості слід створити рівня екземпляра, а які рівня функції-конструктора.*/

const outFourthTask = document.querySelector('[data-fourth-task]');
 class Human {
    constructor (name , age){
        this.name = name;
        this.age = age;
        this.totalLevel = 1;

        Human.container.push(this);
    }
    static container = [];
    static sortYear() {
        return Human.container.slice().sort((a, b) => a.age - b.age);
    }
        level () {
            this.totalLevel += 1;
        }
        showLevel () {
            return `${this.name} is at level ${this.totalLevel}`;
        }
    
}
// створення екземпляра класу
const human = new Human('Leo', 22);
const human1 = new Human('Pitter', 68);
const human2 = new Human('Kriss', 15);
const human3 = new Human('Lili', 92);
const human4 = new Human('Clara', 48);
// вивід інформації на сторінку
const resultFourthTask = document.createElement('div');
resultFourthTask.innerHTML = `<div>${human4.showLevel()}</div> `;
outFourthTask.append(resultFourthTask);


