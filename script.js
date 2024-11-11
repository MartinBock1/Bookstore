// ToDo

// optional
// show favorites
// show allready read


let bookUserName;
let bookCommentsComment;
let commentsArr;
let heartIcon;
let favorites;

function renderBooks() {
    getFromLocalStorage();
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    // first loop to get items from books
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        commentsArr = books[indexBooks].comments;
        contentRef.innerHTML += getBooksTemplate(indexBooks);

        // second loop to get items from comments and show them into the separate commentsTemplate
        for (let indexBooksComments = 0; indexBooksComments < commentsArr.length; indexBooksComments++) {
            bookUserName = commentsArr[indexBooksComments].name;
            bookCommentsComment = commentsArr[indexBooksComments].comment;

            document.getElementById(`comment${indexBooks}`).innerHTML += getCommentsTemplate(indexBooks);
        }
    }
}

// save input data to books[indexBooks]comments and initialize saving to local storage
function saveData(indexBooks) {
    bookUserName = "guest"; //hardcoded username for comment input
    let commentInputRef = document.getElementById(`comment_input${indexBooks}`);
    bookCommentsComment = commentInputRef.value;
    books[indexBooks].comments.push({
        name: bookUserName,
        comment: bookCommentsComment
    });

    saveToLocalStorage();
    renderBooks();

    commentInputRef.value = "";
}

// Stores the books list as a JSON string in local storage.
function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

// Read Data from local Storage 
function getFromLocalStorage() {
    let text = localStorage.getItem("books");
    let obj = JSON.parse(text);

    if (obj) {
        books = obj;
    }
}

// Like Counter
function counterFunction(indexBooks) {
    if (books[indexBooks].liked) {
        books[indexBooks].likes--;
    } else {
        books[indexBooks].likes++;
    }
    books[indexBooks].liked = !books[indexBooks].liked;
    saveToLocalStorage();
    renderBooks();
}