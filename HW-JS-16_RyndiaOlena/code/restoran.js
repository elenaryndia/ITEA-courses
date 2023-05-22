// створено для прикладу
const objRestotation1 = [
    {
        id: '234',
        productName: "Борщ з сметаною",
        productWeiht: "345/30 г",
        productIngredients: "капуста, буряк, вода, м'ясо, сметана",
        productPrice: 156.78,
        productImageUrl: "https://images.unian.net/photos/2020_04/1588081977-7108.jpg?0.533115173094685",
        keywords: ["основна страва, їжа"],
        Weiht: 375,
        stopList: false,
        like: 2,
        ageRestrictions: false
    }
]
const objRestotation2 =[
    {
        id: '234',
        productName: "Деруни з грибами",
        productWeiht: "234/30 г",
        productIngredients: "картопля, гриби, вершки, соус",
        productPrice: 56.78,
        productImageUrl: "https://images.unian.net/photos/2020_04/1588081977-7108.jpg?0.533115173094685",
        keywords: ["їжа", "картопля", "гриби"],
        Weiht: 275,
        stopList: false,
        like: 12,
        ageRestrictions: false
    }
]
// вивід на сторінку
const tbody = document.querySelector("tbody");
const restoran = JSON.parse(localStorage.BDRestoran);

function createElementTable (store) {
    return store.map((el, i) => {
        return `
        <tr>
            <td>${i + 1}</td>
            <td>${el.productName}</td>
            <td>${el.productIngredients}</td>
            <td>${el.productPrice} грн.</td>
            <td>&#128397;</td>
            <td>${el.Weiht}</td>
            <td>${el.date}</td>
            <td>&#128465;</td>
        </tr>
        `
    }).join("");
}

tbody.insertAdjacentHTML("beforeend", createElementTable(restoran));
// створено для прикладу
tbody.insertAdjacentHTML("beforeend", createElementTable(objRestotation1));
tbody.insertAdjacentHTML("beforeend", createElementTable(objRestotation2));