// create template for notes;
function getBooksTemplate(i) {
    return `
                <div class="containerBody">
                    <h2>
                        ${bookTitle[i]}                         
                    </h2>
                    <div class="bookImgContainer">
                        <img src="./assets/icons/book_2.png" alt="picture of a book">  
                    </div>
                    <div class="bookImgContainer">
                        <div class="bookPriceSection">
                            <p class="bookPrice">
                                ${bookPrice[i].toFixed(2).replace(".", ",")} €
                            </p> 
                            <div class="likedSection">                       
                                ${bookLikes[i]}  
                                <img src="./assets/icons/heart.png" alt="heart for likes">  
                            </div>      
                        </div>   
                        <div class="bookPriceSection">
                            <p class="keySection">
                                Author 
                            </p> 
                            <div class="valueSection">                       
                               : ${bookAuthor[i]}   
                            </div>    
                            <p>
                                Erscheinungsjahr
                            </p>
                            <div class="valueSection">
                               : ${bookPublishedYear[i]}   
                            </div>      
                            <p class="keySection">
                                Genre
                            </p>
                            <div class="valueSection">
                               : ${bookGenre[i]}       
                            </div>   
                        </div>    
                    </div>
                    <div class="bookImgContainer">
                        <h3>Kommentare:</h3>    
                        <div class="commentContainer scrollContainer">
                                <div class="keySection">
                                    [${bookCommentsName[i]}]
                                </div>
                                <div class="valueSection">
                                    : ${bookCommentsComment[i]}  
                                </div>                        
                        </div>                    
                    </div>
                    <div class="inputSection">
                        <input type="text"> 
                        <img src="./assets/icons/paper.png" alt="send message button">                     
                    </div>
                </div>
            `;

}