// todos

function counterFunction() {
    // erstelle eine counterFunction() für den like button 
}

function counterToLocalStorage() {
    // speichere das ergebnis in den local storage
}

// function saveData() {
//     let inputRef = document.getElementById('commentInput');

//     if (inputRef.value != "") {
//         bookCommentsComment.push(inputRef.value);
//     }

//     CommentToLocalStorage(); 
//     renderBooks()

//     // delete input field
//     inputRef.value = "";
// }

function inputComment() {
    // erstelle eine input function für das input feld
    let inputRef = document.getElementById('commentInput');

    if (inputRef.value != "") {
        bookCommentsComment.push(inputRef.value);
    }

    CommentToLocalStorage();
    renderBooks();

    // delete input field
    inputRef.value = "";
    // localStorage.setItem("bookCommentsComment", JSON.stringify(bookCommentsComment));
    console.log("send message");
}

function CommentToLocalStorage() {
    // speichere das ergebnis in den local storage
    localStorage.setItem("bookCommentsComment", JSON.stringify(bookCommentsComment.reverse()));
}

function getFromLocalStorage() {
    // speichere das ergebnis in den local storage
}

function getFromLocalStorage() {
    let myArr = JSON.parse(localStorage.getItem("bookCommentsComment"));      // Retrieving data and convert back to an array

    if (myArr != null) {
        bookCommentsComment = myArr;
    }
    // console.log(myData);
}