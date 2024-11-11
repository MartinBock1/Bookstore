// ToDo

// optional
// show favorites
// show allready read

let bookUserName;
let bookCommentsComment;
let CommentsArr;
let heartIcon;

function renderBooks() {
    getFromLocalStorage();
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        CommentsArr = books[i].comments;
        contentRef.innerHTML += getBooksTemplate(i);

        for (let j = 0; j < CommentsArr.length; j++) {
            bookUserName = CommentsArr[j].name;
            bookCommentsComment = CommentsArr[j].comment;

            document.getElementById(`comment${i}`).innerHTML += getcommentsTemplate(i);
        }
    }    
}

function saveData(i) {
    bookUserName = "guest"; //hardcoded username for comment input
    let commentInputRef = document.getElementById(`comment_input${i}`);
    bookCommentsComment = commentInputRef.value;
    books[i].comments.push({ name: bookUserName, comment: bookCommentsComment });

    saveToLocalStorage();
    renderBooks();

    commentInputRef.value = "";
}

function saveToLocalStorage() {
    let bookData = [];
    for (let i = 0; i < books.length; i++) {
        bookData.push({
            likes: books[i].likes,
            liked: books[i].liked,
            comments: books[i].comments
        });
    }
    localStorage.setItem("bookData", JSON.stringify(bookData));
}

function getFromLocalStorage() {
    let bookData = JSON.parse(localStorage.getItem("bookData")) || [];
    for (let i = 0; i < bookData.length; i++) {
        if (books[i]) {
            books[i].likes = bookData[i].likes || 0;
            books[i].liked = bookData[i].liked || false;
            books[i].comments = bookData[i].comments || [];
        }
    }
}

// Like Counter
function counterFunction(i) {
    if (books[i].liked) {
        books[i].likes--;
    } else {
        books[i].likes++;
    }
    books[i].liked = !books[i].liked;
    saveToLocalStorage();
    renderBooks();
}