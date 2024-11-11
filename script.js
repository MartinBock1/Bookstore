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

    // 
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        CommentsArr = books[indexBooks].comments;
        contentRef.innerHTML += getBooksTemplate(indexBooks);

        for (let indexBooksComments = 0; indexBooksComments < CommentsArr.length; indexBooksComments++) {
            bookUserName = CommentsArr[indexBooksComments].name;
            bookCommentsComment = CommentsArr[indexBooksComments].comment;

            document.getElementById(`comment${indexBooks}`).innerHTML += getcommentsTemplate(indexBooks);
        }
    }    
}

// save input data to books[i]comments and initialize saving to local storage
function saveData(indexBooks) {
    bookUserName = "guest"; //hardcoded username for comment input
    let commentInputRef = document.getElementById(`comment_input${indexBooks}`);
    bookCommentsComment = commentInputRef.value;
    books[indexBooks].comments.push({ name: bookUserName, comment: bookCommentsComment });

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