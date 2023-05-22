//Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.
document.write("<li>Дані два масиви: ['a', 'b', 'c'] та [1, 2, 3]. Об'єднайте їх разом.</li>");
document.write("<br/>")

const a=['a', 'b', 'c'];
const b= a.concat(1, 2, 3)
document.write(b);
document.write("<br/>");
document.write("<hr/>");



//Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.
document.write("<li>Дан масив ['a', 'b', 'c']. Додайте йому до кінця елементи 1, 2, 3.</li>");
document.write("<br/>")


let c=['a', 'b', 'c']
c.push("1", "2", "3");
document.write(c);
document.write("<br/>");
document.write("<hr/>");


//Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].
document.write("<li>Дан масив [1, 2, 3]. Зробіть із нього масив [3, 2, 1].</li>");
document.write("<br/>")

let d=[1, 2, 3];
d.reverse();
document.write(d)
document.write("<br/>");
document.write("<hr/>");


//Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.
document.write("<li>Дан масив [1, 2, 3]. Додайте йому до кінця елементи 4, 5, 6.</li>");
document.write("<br/>")

let arr=[1, 2, 3];
arr.push(4, 5, 6);
document.write(arr);
document.write("<br/>");
document.write("<hr/>");

//Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.
document.write("<li>Дан масив [1, 2, 3]. Додайте йому на початок елементи 4, 5, 6.</li>");
document.write("<br/>")

let length=[1, 2, 3];
length.unshift(4, 5, 6);
document.write(length);
document.write("<br/>");
document.write("<hr/>");

//<li>Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.</li>
document.write("<li>Дан масив ['js', 'css', 'jq']. Виведіть перший елемент на екран.</li>");
document.write("<br/>")

let arr2=['js', 'css', 'jq'];
document.write(arr2.slice(0, 1));
document.write("<br/>");
document.write("<hr/>");

// <li>Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].</li>
document.write("<li>Дан масив [1, 2, 3, 4, 5]. За допомогою методу slice запишіть нові елементи [1, 2, 3].</li>");
document.write("<br/>");

let arr3=[1, 2, 3, 4, 5];
document.write(arr3.slice(0, 3));
document.write("<br/>");
document.write("<hr/>");

//<li>Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].</li>
document.write("<li>Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 4, 5].</li>")
document.write("<br/>");

let arr4=[1, 2, 3, 4, 5];
arr4.splice(1,2);
document.write(arr4);
document.write("<br/>");
document.write("<hr/>");

// <li>Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].</li>
document.write("<li>Дан масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворіть масив на [1, 2, 10, 3, 4, 5].</li>")
document.write("<br/>");

let arr5=[1, 2, 3, 4, 5];
arr5.splice(2, 0, 10);
document.write(arr5);
document.write("<br/>");
document.write("<hr/>");

// <li>Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.</li>
document.write("<li>Дан масив [3, 4, 1, 2, 7]. Відсортуйте його.</li>")
document.write("<br/>");

let arr6=[3, 4, 1, 2, 7];
arr6.sort()
document.write(arr6);
document.write("<br/>");
document.write("<hr/>");

// <li>Дан масив з елементами 'Привіт, ', 'світ' і '!'. Необхідно вивести на екран фразу 'Привіт, світ!'.</li>
document.write("<li>Дан масив з елементами 'Привіт, ', 'світ' і '!'. Необхідно вивести на екран фразу 'Привіт, світ!'.</li>")
document.write("<br/>");

let arr7=["Привіт, " , "світ", "!"];
document.write(arr7[0]+arr7[1]+arr7[2]);
document.write("<br/>");
document.write("<hr/>");

// <li>Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.</li>
document.write("<li>Створіть масив arr з елементами 1, 2, 3, 4, 5 двома різними способами.</li>")
document.write("<br/>");
//спосіб 1
let arr8=[1, 2, 3, 4, 5];
document.write(arr8);
document.write("<br/>");
//спосіб 2
const arr9= new Array(1, 2, 3, 4, 5);
document.write(arr9);
document.write("<br/>");
document.write("<hr/>");

// <li>Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.</li>
document.write("<li>Створіть масив arr = ['a', 'b', 'c', 'd'] і за допомогою його виведіть на екран рядок 'a+b, c+d'.</li>")
document.write("<br/>");

let arr10=['a', 'b', 'c', 'd'];
let arr10Res=['a+b ' ,  'c+d'].toString();
document.write(arr10Res);
document.write("<br/>");
document.write("<hr/>");



//<li>Зробіть так, щоб з масиву, який ви створили вище, вивелися всі непарні числа в параграфі, а парні в спані з червоним тлом.</li>