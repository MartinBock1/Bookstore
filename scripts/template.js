// create template for notes;
function getBooksTemplate(i) {
    heartIcon = books[i].liked ? '❤️' : '🤍';   
    return `
                <div class="containerBody">
                    <h2>
                        ${books[i].name}                         
                    </h2>
                    <div class="bookImgContainer">
                        <img src="./assets/icons/book_2.png" alt="picture of a book">  
                    </div>
                    <div class="bookImgContainer">
                        <div class="bookPriceSection">
                            <p class="bookPrice">
                                ${books[i].price.toFixed(2).replace(".", ",")} €
                            </p> 
                            <div class="likedSection"> 
                                <p>  
                                    ${books[i].likes} Likes
                                </p>   
                                <div class="heart" onclick="counterFunction(${i})">    
                                    ${heartIcon}
                                </div>       
                            </div> 
                        </div>   
                        <div class="bookPriceSection">
                            <p class="keySection">
                                Author 
                            </p> 
                            <div class="valueSection">                       
                               : ${books[i].author}   
                            </div>    
                            <p class="keySection">
                                Erscheinungsjahr
                            </p>
                            <div class="valueSection">
                               : ${books[i].publishedYear}   
                            </div>      
                            <p class="keySection">
                                Genre
                            </p>
                            <div class="valueSection">
                               : ${books[i].genre}       
                            </div>   
                        </div>    
                    </div>
                    <div class="bookImgContainer">
                        <h3>Kommentare:</h3>    
                        <div class="commentContainer scrollContainer" id="comment${i}">                                                    
                        </div>                    
                    </div>
                    <div class="inputSection">
                        <input type="text" id="comment_input${i}" placeholder="Schreibe einen Kommentar ..."> 
                        <img onclick="saveData(${i})" src="./assets/icons/paper.png" alt="send message button">                     
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