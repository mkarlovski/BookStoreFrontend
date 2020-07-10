//get from local storage
function initCart() {
    var cartItems = storageService.getFromLocalStorage("cartItems");

    //axios get for each id
    for (let i = 0; i < cartItems.length; i++) {
        axios.get(`https://localhost:44319/api/books/${cartItems[i]}`)
            .then(function(response) {
                console.log(response.data);
                createCartItem(response.data)

            })
            .catch(function(error) {
                console.log(error);
            });

    }
}

function createCartItem(book) {

    var cartContainer = document.getElementById("card-container");

    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("border-dark");


    var cardTitle = document.createElement("div");



}


function removeFromCart(event, bookId) {
    storageService.removeFromLocalStorage(bookId, "cartItems");
    event.target.parentElement.remove(); //so ova go briseme Parent div-ot
}


function orderBooks() {
    //get all input
    var name = document.getElementById("customerName").value;
    var name = document.getElementById("customerEmail").value;
    var name = document.getElementById("customerAddress").value;
    var name = document.getElementById("customerPhone").value;

    //get bookIds from Local Storage
    var storageData = storageService.getFromLocalStorage("cartItems");

    //send to api

    axios.post('https://localhost:44319/api/orders', {
            name: name,
            email: email,
            phone: phone,
            address: address,
            bookIds: storageData
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
}

initCart();


//axios get for each id
//show data for each book