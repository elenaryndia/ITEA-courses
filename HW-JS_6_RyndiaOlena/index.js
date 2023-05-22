/*Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата". Створити об'єкт вкладений об'єкт - "Додаток". 
Створити об'єкт "Додаток", вкладені об'єкти, "Заголовок, тіло, футер, дата". Створити методи для заповнення та відображення документа.*/
const content = {
    head: "",
    body: "",
    footer: "",
    date: "",
    print:  function (name) {
         document.write("<p>" +"Заголовок "+name+" - "+ this.head);
         document.write("<p>" +"Тіло "+name+" - "+ this.body);
         document.write("<p>" +"Футер "+name+" - "+ this.footer);
         document.write("<p>" +"Дата "+name+" - "+ this.date);
     }
};

const myDocument = content;
myDocument.application = content;
myDocument.append = function () {
     myDocument.head = prompt("Введіть заголовок!");
     myDocument.application.head = myDocument.head;
     myDocument.body = prompt("Введіть тіло!");
     myDocument.application.body = myDocument.body;
     myDocument.footer = prompt("Введіть футер!");
     myDocument.application.footer = myDocument.footer;
     myDocument.date = prompt("Введіть дату!");
     myDocument.application.date = myDocument.date;
 };

 myDocument.append();
 myDocument.print("документа");
 myDocument.application.print("додатка");

