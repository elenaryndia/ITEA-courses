/*Створити клас Car , Engine та Driver.
Клас Driver містить поля - ПІБ, стаж водіння.
Клас Engine містить поля – потужність, виробник.
Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.

Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.*/
const output = document.querySelector('[data-task]');

//Клас Driver містить поля - ПІБ, стаж водіння.
class Driver {
    constructor (name, secondName, surName,  drivingExp) {
        this.name = name;
        this.secondName = secondName;
        this.surName = surName;
        this.drivingExp = drivingExp;
    }
}

const driver = new Driver('Anna', 'Mariia','Lia', 10);

// Клас Engine містить поля – потужність, виробник.
class Engine {
    constructor (power, model) {
        this.power = power;
        this.model = model;
    }
}

const engine = new Engine(115, 'Duster');

// створюємо клас машини з методами та екземпляр цього класу
class Car {
    constructor (brand, clas, weight, engine, driver) {
        this.brand = brand;
        this.clas = clas;
        this.weight = weight;
        this.engine = engine;
        this.driver = driver;
    }
    start() {
        return `<li>Поїхали на авто ${this.brand}.</li>`;
    }
    stop() {
        return `<li>Авто ${this.brand} зупиняється.</li>`;
    }
    turnRight() {
        return `<li>Авто ${this.brand} повертає праворуч.</li>`;
    }
    turnLeft() {
        return `<li>Авто ${this.brand} повертає ліворуч.</li>`;
    }
    toString() {
        return `<div>Aвто ${this.brand} її модель ${this.engine.model} класом ${this.clas} потужність двигуна має ${this.engine.power} вагу ${this.weight}  за кермом сидить ${this.driver.name} ${this.driver.secondName} з досвідом водіння ${this.driver.drivingExp} років</div>`;
    }
}

const car = new Car('Renault', 'Cuv', 1712, engine, driver);
const outputCar = document.createElement('div');
outputCar.innerHTML = `Метод toString(): ${car.toString()} Метод start(): ${car.start()} Метода turnRight(): ${car.turnRight()} Метода turnLeft(): ${car.turnLeft()} Метода stop(): ${car.stop()}`;

// Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
class Lorry extends Car {
    constructor (brand, clas, weight, engine, driver, loadCapacity) {
        super(brand, clas, weight, engine, driver);
        this.loadCapacity = loadCapacity;
    }
    toString () {
        return `<div> ${super.toString()} , а також авто має максимальну вантажність ${this.loadCapacity}</div>`;
    }
}

const engineIveco = new Engine (250, 'hors');
const lorry = new Lorry('iveco', 'truck', 3245, engineIveco, driver, 5436);

const outputLorry = document.createElement('div');
outputLorry.innerHTML = `Характеристики вантажівки класу Lorry за допомогою метода toString(): ${lorry.toString()}  Метод start(): ${lorry.start()} Метод turnRight(): ${lorry.turnRight()} Метод turnLeft(): ${lorry.turnLeft()} Метод stop(): ${lorry.stop()}`;

// Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю
class SportCar extends Car {
    constructor (brand, clas, weight, engine, driver, maxSpeed) {
        super(brand, clas, weight, engine, driver);
        this.maxSpeed = maxSpeed;
    }
    toString () {
        return `<div>${super.toString()}  а також авто має максимальну швидкість ${this.maxSpeed}</div>`;
    }
}

const engineAlfaRomeo = new Engine (546, 'Julia');
const sportCar = new SportCar ('Alfa Romeo', 'sport car', 1234, engineAlfaRomeo, driver, 298);

const outputSportCar = document.createElement('div');
outputSportCar.innerHTML = `Характеристики спорт кару за допомогою метода toString(): ${sportCar.toString()}  Метод start(): ${sportCar.start()} Метод turnRight(): ${sportCar.turnRight()} Метод turnLeft(): ${sportCar.turnLeft()} Метод stop(): ${sportCar.stop()}`;

output.append(outputCar, outputLorry, outputSportCar);