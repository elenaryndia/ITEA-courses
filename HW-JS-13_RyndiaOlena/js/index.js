fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(comments => paginationsComment (comments, 10))

// створення пагінації на сторінці
const block = document.querySelector('.comment__post');
const pagination = document.querySelector('.pagination__list');
const totalComment = document.querySelector('.comment__title');
const [...totalCommentPost] = document.querySelectorAll('.post__comments');
function paginationsComment (items, notes) {
    totalCommentPost.forEach((e) => {
        const totalEl = document.createElement('span');
        totalEl.classList.add('comment__total');
        totalEl.innerHTML = `
        ${items.length}
        `
        e.append(totalEl);
    })
    let notesOnPage = notes;

    let countOfItems = Math.ceil(items.length / notesOnPage);

    let paginationItem = [];
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement("li");
        li.classList.add("pagination__item");
        pagination.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = i;
        li.appendChild(span);
        paginationItem.push(span);
    }
    let active;
    showPage(paginationItem[0]);
    for (let item of paginationItem) {
        item.addEventListener("click", function() {
            showPage(this);
        });
    }

    function showPage(item) {
        if (active) {
            active.classList.remove("_active");
        }
        active = item;
        item.classList.add("_active");

        let pageNum = +item.innerHTML;

        let start = (pageNum - 1) * notesOnPage;
        let end = start + notesOnPage;
        let notes = items.slice(start, end);

        block.innerHTML = "";
        for (let n of notes) {
            const element = document.createElement('div');
                element.classList.add('comment__margin');
                element.innerHTML = `
                        <div class="comment__data">
                        <span>id:${n.id}</span>
                          <div>
                            <p class="comment__name">${n.name}</p>
                            <p class="comment__date">Email: ${n.email}</p>
                          </div>
                          <p class="comment__content">
                          ${n.body}
                          </p>
                          <a href="#">Відповісти</a>
                        </div>
                `
            block.append(element);
        }
        hideOverPages();
        const totalEl = document.createElement('span');
        totalEl.classList.add('comment__icon');
        totalEl.innerHTML = `
        ${items.length}
        `
        totalComment.append(totalEl);
    }
    function hideOverPages() {
        let items = [...pagination.children];
        if (items.length > 3) {
            items.forEach((item) => item.classList.add("_hide"));
            items[0].classList.remove("_hide");
            if (active.parentElement.previousElementSibling) {
                active.parentElement.previousElementSibling.classList.remove("_hide");
            }
            active.parentElement.classList.remove("_hide");
            if (active.parentElement.nextElementSibling) {
                active.parentElement.nextElementSibling.classList.remove("_hide");
            }
            items[items.length - 1].classList.remove("_hide");
        }
    }
}
