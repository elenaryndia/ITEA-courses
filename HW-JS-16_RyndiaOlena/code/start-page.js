import { modalHide, modalShow, createInputsForModal, generationID } from "./functions.js";

const btnShowMadal = document.querySelector(".add"),
    btnCloseModal = document.getElementById("close"),
    btnSaveModal = document.getElementById("save"),
    select = document.getElementById("select"),
    formInfo = document.querySelector(".form-info"),
    store = ["Назва продукту", "Вартість продукту", "Посилання на зображення", "Опис продукту", "Ключеві слова (Розділяти комою)"],
    restoran = ["Назва продукту", "Вага Продукту", "Інгредієнти", "Ціна", "Посилання на зображення", "Ключеві слова (Розділяти комою)", "Загальна вага", "Кількість вподобань"],
    video = ["Назва відео", "Посилання на відео", "Дата публікації", "Тематика", "Опис відео", "Рейтинг", "Ключеві слова (Розділяти комою)"];
let typeCategory = null;


btnShowMadal.addEventListener("click", modalShow);
btnCloseModal.addEventListener("click", modalHide);

select.addEventListener("change", () => {
    typeCategory = select.value;

    if (select.value === "Магазин") {
        formInfo.innerHTML = '';
        formInfo.insertAdjacentHTML("beforeend", createInputsForModal(store));
    } else if (select.value === "Відео хостинг") {
        formInfo.innerHTML = '';
        formInfo.insertAdjacentHTML("beforeend", createInputsForModal(video));
    } else if (select.value === "Ресторан") {
        formInfo.innerHTML = '';
        formInfo.insertAdjacentHTML("beforeend", createInputsForModal(restoran));
    } else {
        console.error("Жоден з пунктів не валідний.")
        return
    }
})

btnSaveModal.addEventListener("click", () => {
    const [...inputs] = document.querySelectorAll(".form-info input");
    // store
    const objStore = {
        id: "",
        status: false,
        productName: "",
        porductPrice: 0,
        productImage: "",
        productDescription: "",
        productQuantity: 0,
        keywords: []
    }
    if (typeCategory === "Магазин") {
        objStore.id = generationID();
        inputs.forEach((input) => {
            if (input.value.length > 3) {
                if (input.dataset.type === "Назва продукту") {
                    objStore.productName = input.value;
                } else if (input.dataset.type === "Вартість продукту") {
                    objStore.porductPrice = parseFloat(input.value);
                } else if (input.dataset.type === "Посилання на зображення") {
                    objStore.productImage = input.value;
                } else if (input.dataset.type === "Опис продукту") {
                    objStore.productDescription = input.value;
                } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
                    objStore.keywords.push(...input.value.split(","))
                }
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                return
            }
            input.value = '';
        })
        objStore.date = new Date();
        if(objStore.productQuantity <= 0){
            objStore.status = false;
        }else{
            objStore.status = true;
        }
        const store = JSON.parse(localStorage.BDStore);
        store.push(objStore);
        localStorage.BDStore = JSON.stringify(store);
    }

    // restoran
    const objRestotation = {
        id: '',
        productName: "",
        productWeiht: "",
        productIngredients: "",
        productPrice: 0,
        productImageUrl: "",
        keywords: [],
        Weiht: 0,
        stopList: false,
        like: 0,
        ageRestrictions: false
    }
    if (typeCategory === "Ресторан") {
        objRestotation.id = generationID();
        inputs.forEach((input) => {
            if (input.value.length >= 1) {
                if (input.dataset.type === "Назва продукту") {
                    objRestotation.productName = input.value;
                } else if (input.dataset.type === "Вага Продукту") {
                    objRestotation.productWeiht = input.value;
                } else if (input.dataset.type === "Інгредієнти") {
                    objRestotation.productIngredients = input.value;
                } else if (input.dataset.type === "Ціна") {
                    objRestotation.productPrice = parseFloat(input.value);
                } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
                    objRestotation.keywords.push(...input.value.split(","))
                } else if (input.dataset.type === "Посилання на зображення") {
                    objRestotation.productImageUrl = input.value;
                } else if (input.dataset.type === "Загальна вага") {
                    objRestotation.Weiht = parseFloat(input.value);
                } else if (input.dataset.type === "Кількість вподобань") {
                    objRestotation.like = parseFloat(input.value);
                }
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                return
            }
            input.value = '';
        })
        objRestotation.date = new Date();
        const restoran = JSON.parse(localStorage.BDRestoran);
        restoran.push(objRestotation);
        localStorage.BDRestoran = JSON.stringify(restoran);
    }
//     Video
    const objVideo = {
        id: "",
        productName: "",
        productLink: "",
        productDatePublication: "",
        productSubject: "",
        productDescription: "",
        productRating: 0,
        keywords: []
    }
    if (typeCategory === "Відео хостинг") {
        objVideo.id = generationID();
        inputs.forEach((input) => {
            if (input.value.length >= 1) {
                if (input.dataset.type === "Назва відео") {
                    objVideo.productName = input.value;
                } else if (input.dataset.type === "Посилання на відео") {
                    objVideo.productLink = input.value;
                } else if (input.dataset.type === "Дата публікації") {
                    objVideo.productDatePublication = input.value;
                } else if (input.dataset.type === "Тематика") {
                    objVideo.productSubject = input.value;
                } else if (input.dataset.type === "Опис відео") {
                    objVideo.productDescription = input.value;
                } else if (input.dataset.type === "Рейтинг") {
                    objVideo.productRating = parseFloat(input.value);
                } else if (input.dataset.type === "Ключеві слова (Розділяти комою)") {
                    objVideo.keywords.push(...input.value.split(","))
                }
                input.classList.remove("error");
            } else {
                input.classList.add("error");
                return
            }
            input.value = '';
        })
        objVideo.date = new Date();

        const video = JSON.parse(localStorage.BDVideo);
        video.push(objVideo);
        localStorage.BDVideo = JSON.stringify(video);
    }
})






