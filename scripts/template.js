// create template for notes;
function getBooksTemplate(i) {
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
                                ${books[i].likes}  
                                <img src="./assets/icons/heart.png" alt="heart for likes">  
                            </div>      
                        </div>   
                        <div class="bookPriceSection">
                            <p class="keySection">
                                Author 
                            </p> 
                            <div class="valueSection">                       
                               : ${books[i].author}   
                            </div>    
                            <p>
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
                        <div class="commentContainer scrollContainer">
                                <div class="keySection">
                                    [${bookCommentsName[i].name}]
                                </div>
                                <div class="valueSection">
                                    : ${bookCommentsComment[i]}  
                                </div>                        
                        </div>                    
                    </div>
                    <div class="inputSection">
                        <input type="text" id="commentInput"> 
                        <img onclick="inputComment()" src="./assets/icons/paper.png" alt="send message button">                     
                    </div>
                </div>
            `;

}