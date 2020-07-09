axios.get('https://localhost:44319/api/books')
    .then(function(response) {
        console.log(response.data);

        response.data.forEach(book => {
            createBookCard(book);
        });
    })
    .catch(function(error) {
        console.log(error);
    });

function createBookCard(book) {

    var cardColumn = document.createElement("div");
    cardColumn.classList.add("col-md-3");

    var card = document.createElement("div");
    card.classList.add("card");

    cardColumn.appendChild(card);

    var cardBody = document.createElement("div");
    card.classList.add("card-body");

    card.appendChild(cardBody);

    var cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.innerHtml = book.Title;

    cardBody.appendChild(cardTitle);

    var cardAuthor = document.createElement("h4");
    cardAuthor.classList.add("card-title");
    cardAuthor.innerHtml = `Author: ${book.author}`;

    cardBody.appendChild(cardAuthor);

    var cardDescription = document.createElement("p");
    cardDescription.classList.add("card-text");
    cardDescription.innerHtml = book.description;

    cardBody.appendChild(cardDescription);

    var cardPrice = document.createElement("p");
    cardPrice.classList.add("card-text");
    cardPrice.innerHtml = `Price: ${book.Price}`;
    cardBody.appendChild(cardPrice);

    var cardGenre = document.createElement("p");
    cardGenre.classList.add("card-text");
    cardGenre.innerHtml = `Genre: ${book.genre}`;
    cardBody.appendChild(cardGenre);

    var cardBtn = document.createElement("button");
    cardBtn.classList.add("btn");
    cardBtn.classList.add("btn-primary");



    if (storageService.existsInLocalStorage(book.id, "cartItems")) {
        cardBtn.innerHtml = "Remove from cart";
        cardBtn.onclick = function(e) {
            removeFromCart(e, book.id);
        };
    } else {
        cardBtn.innerHtml = "Add to cart";
        cardBtn.onclick = function(e) {
            addToCart(e, book.id);
        };
    }

    cardBody.appendChild(cardBtn);

    var cardContainer = document.getElementById("card-container");
    cardContainer.appendChild(cardColumn);
}



function addToCart(event, bookId) {
    storageService.addToLocalStorage(bookId, "cartItems");
    event.target.innerHtml = "Remove from cart";
    event.target.onclick = function(e) {
        removeFromCart(e, bookId);
    }
}

function removeFromCart(event, bookId) {
    storageService.removeFromLocalStorage(bookId, "cartItems");
    event.target.innerHtml = "Add to cart";
    event.target.onclick = function(e) {
        addToCart(e, bookId);
    }
}


//ovaa karticka treba da ja iskreirame so manipulacija na DOM

// <div class="col-md-3">
//             <div class="card" style="width: 18rem;">
//                 
//                 <div class="card-body">
//                     <h5 class="card-title">Zoki Poki</h5>
//                     <h5 class="card-title">Author: Olivera Nikolova</h5>
//                     <p class="card-text">Zoki Poki</p>
//                     <p class="card-text">Price: besceneto</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>