// create template for notes;
function getBooksTemplate(i) {
    return `
                <div class="containerBody">
                    <h2>
                        ${bookTitle[i]}                        
                    </h2>
                    <div class="bookImgContainer">
                        <img src="" alt="picture of a book">  
                        test
                    </div>
                    <div class="bookImgContainer">
                        <div class="bookPriceSection">
                            <p class="bookPrice">
                                ${bookPrice[i]}
                            </p> 
                            <div>                       
                                ${bookLikes[i]}    
                                ${bookLiked[i]}  
                                <img src="" alt="heart for likes">  
                            </div>                  
                        </div>                    
                        <p>
                            Author: ${bookAuthor[i]}                        
                        </p>
                        <p>
                            Erscheinungsjahr: ${bookPublishedYear[i]}                        
                        </p>
                        <p>
                            Genre: ${bookGenre[i]}                        
                        </p>
                    </div>
                    <p>
                        <h3>Kommentare:</h3>                        
                        <p>
                            [${bookCommentsName[i]}]
                            : ${bookCommentsComment[i]}    
                        </p>                                        
                    </p>
                    ${bookCommentsName}
                </div>
            `;

}