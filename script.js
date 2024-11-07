let bookTitle = [];
let bookAuthor = [];
let bookPrice = [];
let bookLikes = [];
let bookLiked = [];
let bookPublishedYear = [];
let bookGenre = [];
let bookCommentsName = [];
let bookCommentsComment = [];


for (let i = 0; i < books.length; i++) {
    bookTitle.push(books[i].name);
}

for (let i = 0; i < books.length; i++) {
    bookPrice.push(books[i].price);
}

for (let i = 0; i < books.length; i++) {
    bookLikes.push(books[i].likes);
}

for (let i = 0; i < books.length; i++) {
    bookLiked.push(books[i].liked);
}

for (let i = 0; i < books.length; i++) {
    bookAuthor.push(books[i].author);
}

for (let i = 0; i < books.length; i++) {
    bookPublishedYear.push(books[i].publishedYear);
}

for (let i = 0; i < books.length; i++) {
    bookGenre.push(books[i].genre);
}

let CommentsArr;
for (let i = 0; i < books.length; i++) {
    CommentsArr = books[i].comments;

    for (let j = 0; j < CommentsArr.length; j++) {
        CommentsArr = CommentsArr[j];
        bookCommentsName.push(CommentsArr.name);
        bookCommentsComment.push(CommentsArr.comment);
    }
}

function renderBooks() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let i = 0; i < bookTitle.length; i++) {
        contentRef.innerHTML += getBooksTemplate(i);
    }
}

