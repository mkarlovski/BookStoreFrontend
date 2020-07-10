storageService = {
    existsInLocalStorage: function(bookId, storageKey) {

        var existingStorage = localStorage.getItem(storageKey); // vo local storage se cuva kako string i so parse pravime objekt
        var exists = false;
        if (existingStorage != null) {
            var parsed = JSON.parse(existingStorage)
            exists = parsed.indexOf(bookId) !== -1;
        }
        return exists;
    },
    addToLocalStorage: function(bookId, storageKey) {
        var storageData = []; //prazen array

        //get items from local storage
        var existingStorage = localStorage.getItem(storageKey); // vaka gi zema kako string

        if (existingStorage != null) {
            storageData = JSON.parse(existingStorage); //pretvori vo objekt ili array
        }

        if (storageData.indexOf(bookId) == -1) {
            storageData.push(bookId);
        }
        var serialized = JSON.stringify(storageData);

        localStorage.setItem(storageKey, serialized) //cartItems=key po ova ke barame vo localStorage

    },
    removeFromLocalStorage: function(bookId, storageKey) {
        var existingStorage = localStorage.getItem(storageKey);
        if (existingStorage != null) {
            var storage = JSON.parse(existingStorage);
            storage = storage.filter(x => {
                return x != bookid;
            })
            localStorage.setItem(storageKey, JSON.stringify(storage));
        }
    },
    getFromLocalStorage: function(storageKey) {
        return JSON.parse(localStorage.getItem(storageKey))
    }
}