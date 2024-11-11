// create template for notes;
function getBooksTemplate(indexBooks) {
    heartIcon = books[indexBooks].liked ? '❤️' : '🤍';   
    return `
                <div class="containerBody">
                    <h2>
                        ${books[indexBooks].name}                         
                    </h2>
                    <div class="bookImgContainer">
                        <img src="./assets/icons/book_2.png" alt="picture of a book">  
                    </div>
                    <div class="bookImgContainer">
                        <div class="bookPriceSection">
                            <p class="bookPrice">
                                ${books[indexBooks].price.toFixed(2).replace(".", ",")} €
                            </p> 
                            <div class="likedSection"> 
                                <p>  
                                    ${books[indexBooks].likes} Likes
                                </p>   
                                <div class="heart" onclick="counterFunction(${indexBooks})">    
                                    ${heartIcon}
                                </div>       
                            </div> 
                        </div>   
                        <div class="bookPriceSection">
                            <p class="keySection">
                                Author 
                            </p> 
                            <div class="valueSection">                       
                               : ${books[indexBooks].author}   
                            </div>    
                            <p class="keySection">
                                Erscheinungsjahr
                            </p>
                            <div class="valueSection">
                               : ${books[indexBooks].publishedYear}   
                            </div>      
                            <p class="keySection">
                                Genre
                            </p>
                            <div class="valueSection">
                               : ${books[indexBooks].genre}       
                            </div>   
                        </div>    
                    </div>
                    <div class="bookImgContainer">
                        <h3>Kommentare:</h3>    
                        <div class="commentContainer scrollContainer" id="comment${indexBooks}">                                                    
                        </div>                    
                    </div>
                    <div class="inputSection">
                        <input type="text" id="comment_input${indexBooks}" placeholder="Schreibe einen Kommentar ..."> 
                        <img onclick="saveData(${indexBooks})" src="./assets/icons/paper.png" alt="send message button">                     
                    </div>
                </div>
            `;
}

function getcommentsTemplate() {
  return   `
                <div class="keySectionComment">
                    <b><i>[${bookUserName}]</i></b>
                </div>
                <div class="valueSectionComment">
                    : ${bookCommentsComment}  
                </div>    
            `;

}