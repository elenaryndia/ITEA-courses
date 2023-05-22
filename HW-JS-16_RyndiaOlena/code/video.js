// створено для прикладу
const objVideo1 = [{
    id: "12",
    productName: "Відео-1",
    productLink: "../media/castle.mp4",
    productDatePublication: "01.03.2023",
    productSubject: "castle",
    productDescription: "castle castle",
    productRating: 0,
    keywords: ['castle', 'castle', 'castle', 'castle']
}]
const objVideo2 = [{
    id: "12",
    productName: "Відео-2",
    productLink: "../media/frog.mp4",
    productDatePublication: "01.03.2023",
    productSubject: "frog",
    productDescription: "frog castle",
    productRating: 0,
    keywords: ['castle', 'frog', 'frog', 'frog']
}]
const objVideo3 = [{
    id: "12",
    productName: "Відео-3",
    productLink: "../media/water.mp4",
    productDatePublication: "01.03.2023",
    productSubject: "water",
    productDescription: "water water",
    productRating: 0,
    keywords: ['water', 'water', 'frog', 'water']
}]
const objVideo4 = [{
    id: "12",
    productName: "Відео-4",
    productLink: "https://youtu.be/fND55QhC8pI",
    productDatePublication: "01.03.2023",
    productSubject: "Top Gun",
    productDescription: "Top Gun",
    productRating: 0,
    keywords: ['Top Gun', 'Top Gun', 'Top Gun', 'Top Gun']
}]
const objVideo5 = [{
    id: "12",
    productName: "Відео-5",
    productLink: "https://youtu.be/HTy1bHjbW4Y",
    productDatePublication: "01.03.2023",
    productSubject: "Camaro",
    productDescription: "Camaro Camaro",
    productRating: 0,
    keywords: ['Camaro', 'Camaro', 'Camaro', 'Camaro']
}]
const objVideo6 = [{
    id: "12",
    productName: "Відео-6",
    productLink: "https://youtu.be/SuP4eFEJhjE",
    productDatePublication: "01.03.2023",
    productSubject: "Productive Music",
    productDescription: "Productive Music Music",
    productRating: 0,
    keywords: ['Music', 'Productive Music', 'Productive Music', 'Music']
}]

// вивід на сторінку
const tbody = document.querySelector("tbody");
const video = JSON.parse(localStorage.BDVideo);

function createElementTable (vid) {
    return vid.map((el, i) => {
        return `
        <tr>
            <td>${i + 1}</td>
            <td>${el.productName}</td>
            <td>${el.productDatePublication}</td>
            <td> <a href="${el.productLink}">${el.productLink}</a></td>
            <td>&#128397;</td>
            <td>&#128465;</td>
        </tr>
        `
    }).join("");
}

tbody.insertAdjacentHTML("beforeend", createElementTable(video));
// створено для прикладу
tbody.insertAdjacentHTML("beforeend", createElementTable(objVideo1));
tbody.insertAdjacentHTML("beforeend", createElementTable(objVideo2));
tbody.insertAdjacentHTML("beforeend", createElementTable(objVideo3));
tbody.insertAdjacentHTML("beforeend", createElementTable(objVideo4));
tbody.insertAdjacentHTML("beforeend", createElementTable(objVideo5));
tbody.insertAdjacentHTML("beforeend", createElementTable(objVideo6));