let bookUserName = [];
let bookCommentsComment = [];
let CommentsArr;
let heartIcon;

function renderBooks() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        CommentsArr = books[i].comments;   
        contentRef.innerHTML += getBooksTemplate(i);

        for (let j = 0; j < CommentsArr.length; j++) {
            bookUserName = CommentsArr[j].name;
            bookCommentsComment = CommentsArr[j].comment;              
            
            document.getElementById(`comment${i}`).innerHTML += `<div class="keySection">
                                                             [${bookUserName}]
                                                            </div>
                                                            <div class="valueSection">
                                                                : ${bookCommentsComment}  
                                                            </div>    `;
        }        
    }   
}