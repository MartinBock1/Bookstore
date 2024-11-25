// ToDo

// optional
// show favorites
// show allready read



/** Declaration of global variables.
 *  - de - Deklaration globaler Variablen.
 */ 
// Stores the name of the user posting a comment.
// - de - Speichert den Namen des Benutzers, der einen Kommentar hinterlässt. 
let bookUserName; 

// Stores the text of the comment.
// - de - Speichert den Text des Kommentars. 
let bookCommentsComment; 

// Array for storing a book's comments.
// - de - Array zum Speichern der Kommentare eines Buches. 
let commentsArr; 

// Symbol for the like icon (❤️ or 🤍).
// - de - Symbol für das Like-Icon (❤️ oder 🤍). 
let heartIcon; 

// Variable for future features like favorites.
// - de - Variable für zukünftige Funktionen wie Favoriten. 
let favorites; 


/** Function to render the list of books.
 *  - de - Funktion zum Rendern der Bücherliste.
 */
function renderBooks() {
    // Retrieves the data from Local Storage.
    // - de - Holt die Daten aus dem Local Storage.
    getFromLocalStorage();

    // Gets the HTML element for content.
    // - de - Holt das HTML-Element für den Inhalt. 
    let contentRef = document.getElementById('content');

    // Resets the inner HTML content to empty.
    // - de - Setzt den inneren HTML-Inhalt auf leer. 
    contentRef.innerHTML = "";

    // Loop through all books.
    // - de - Schleife durch alle Bücher.
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        // Stores the comments of the current book.
        // - de - Speichert die Kommentare des aktuellen Buchs. 
        commentsArr = books[indexBooks].comments;

        // Adds the HTML template of the current book.
        // - de - Fügt das HTML-Template des aktuellen Buches hinzu. 
        contentRef.innerHTML += getBooksTemplate(indexBooks);

        // Loop through the comments of the current book.
        // - de - Schleife durch die Kommentare des aktuellen Buchs. 
        for (let indexBooksComments = 0; indexBooksComments < commentsArr.length; indexBooksComments++) {
            // Stores the name and comment of the current comment.
            // - de - Speichert den Namen und Kommentar des aktuellen Kommentars. 
            bookUserName = commentsArr[indexBooksComments].name;
            bookCommentsComment = commentsArr[indexBooksComments].comment;

            // Adds the HTML template of the comment to the book.
            // - de - Fügt das HTML-Template des Kommentars zum Buch hinzu. 
            document.getElementById(`comment${indexBooks}`).innerHTML += getCommentsTemplate(indexBooks);
        }
    }
}

/** Saves user data (comments) in a book and stores them in Local Storage.
 *  - de - Speichert Benutzerdaten (Kommentare) in einem Buch und speichert sie im Local Storage.
 * @param {*} indexBooks 
 */
function saveData(indexBooks) {
    // Sets the username to "guest" by default.
    // - de - Setzt den Benutzernamen standardmäßig auf "guest".
    bookUserName = "guest";  //hardcoded username for comment input

    // Gets the input from the comment field.
    // - de - Holt die Eingabe des Kommentarfeldes.
    let commentInputRef = document.getElementById(`comment_input${indexBooks}`);

    // Stores the comment text.
    // - de - Speichert den Kommentartext.
    bookCommentsComment = commentInputRef.value;

    // Adds the new comment to the book.
    // - de - Fügt den neuen Kommentar zum Buch hinzu.
    books[indexBooks].comments.push({
        // The name of the user. 
        // - de - Der Name des Benutzers. 
        name: bookUserName, 

        // The entered comment text. 
        // - de - Der eingegebene Kommentartext. 
        comment: bookCommentsComment 
    });

    // Saves the updated data to Local Storage.
    // - de - Speichert die aktualisierten Daten im Local Storage.
    saveToLocalStorage();

    // Updates the display of the book list.
    // - de - Aktualisiert die Anzeige der Bücherliste.
    renderBooks();

    // Resets the input field.
    // - de - Setzt das Eingabefeld zurück.
    commentInputRef.value = "";
}

/** Saves the book list as a JSON string in Local Storage.
 *  - de - Speichert die Bücherliste als JSON-String im Local Storage.
 */
function saveToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(books));
}

/** Reads the book list from Local Storage.
 *  - de - Liest die Bücherliste aus dem Local Storage.
 */
function getFromLocalStorage() {
    // Retrieves the data as a JSON string from Local Storage.
    // - de - Holt die Daten als JSON-String aus dem Local Storage.
    let text = localStorage.getItem("books");

    // Converts the JSON string into a JavaScript object.
    // - de - Wandelt den JSON-String in ein JavaScript-Objekt um.
    let obj = JSON.parse(text);

    // If data is available, assigns it to the global `books` variable.
    // - de - Wenn Daten vorhanden sind, werden sie der globalen Variable `books` zugewiesen.
    if (obj) {
        books = obj;
    }
}


/** Function to like/dislike a book.
 *  - de - Funktion zum Liken/Disliken eines Buches.
 * @param {*} indexBooks 
 */
function counterFunction(indexBooks) {
    // Checks if the book is liked.
    // - de - Überprüft, ob das Buch geliked ist. 
    if (books[indexBooks].liked) {
        // Reduces the number of likes if it is already liked.
        // - de - Reduziert die Anzahl der Likes, wenn es bereits geliked wurde.
        books[indexBooks].likes--;
    } else {
        // Increases the number of likes if it is not yet liked.
        // - de - Erhöht die Anzahl der Likes, wenn es noch nicht geliked wurde.
        books[indexBooks].likes++;
    }
        
    // Toggles the like status.
    // - de - Wechselt den Zustand des Like-Status.
    books[indexBooks].liked = !books[indexBooks].liked;
    
    // Saves the updated data to Local Storage.
    // - de - Speichert die aktualisierten Daten im Local Storage.
    saveToLocalStorage();
 
    // Updates the display of the book list.
    // - de - Aktualisiert die Anzeige der Bücherliste.
    renderBooks();
}