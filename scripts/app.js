axios.get('https://localhost:44319/api/books')
    .then(function(response) {
        console.log(response.data);

        response.data.array.forEach(book => {
            createBookCard(book);



        });
    })
    .catch(function(error) {
        console.log(error);
    });



function createBookCard(book) {

    var carColumn = document.createElement("div");
    card.classList.add("col-md-3");

    var cardBody = document.createElement("div");
    card.classList.add("card-body");
}

function existsInLocalStorage(bookId) {

    var existingStorage = localStorage.getItem("cartItems"); // vo local storage se cuva kako string i so parse pravime objekt
    var exists = false;
    if (existingStorage != null) {
        var parsed = JSON.parse(existingStorage)
        exists = parsed.indexOf(bookId) !== -1;
    }
    return exists;
}
//zemame od local storage
//parse
//check dali postoi ili ne 
//i vrakjame true or false

}

function addToCart(event, bookId) {
    // alert(bookId);
    //add to existing
    //serialize
    //change add to cart to remove from cart
    //so event.target go zemame kliknato kopce
    addToLocalStorage(bookId);
    event.target.innerHtml = "Remove from cart";
    event.target.onclick = function(e) {
        removeFromCart(e, bookId);
    }
}

function removeFromCart(event, bookId) {
    alert(bookId);
    var existingStorage = localStorage.getItems("cartItems");
    if (existingStorage != null) {
        var storage = JSON.parse(existingStorage);
        var index = storage.indexOf(bookId);

        if (index != -1) { // ova znaci deka postoi
            storage.splice(index, 1);
            localStorage.setItem(Json.stringify(storage));
        }
    }

}

function addToLocalStorage(bookId) {
    var storageData = []; //prazen array

    //get items from local storage
    var existingStorage = localStorage.getItem("cartItems");

    if (existingStorage != null) {
        storageData = JSON.parse(existingStorage);
    }

    if (storageData.indexOf(bookId) == -1) {
        storageData.push(bookId);
    }
    var serialized = JSON.stringify(storageData);

    localStorage.setItem("cartItems", serialized) //cartItems=key po ova ke barame vo localStorage

}



//ovaa karticka treba da ja iskreirame so manipulacija na DOM

// <div class="col-md-3">
//             <div class="card" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">Zoki Poki</h5>
//                     <h5 class="card-title">Author: Olivera Nikolova</h5>
//                     <p class="card-text">Zoki Poki</p>
//                     <p class="card-text">Price: besceneto</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>