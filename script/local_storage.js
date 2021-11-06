function LocalStorageObject(key) {
    this.key = key;
}

LocalStorageObject.prototype = {
    getLocalStorage: function () {
        return (localStorage.getItem(this.key) ?
            JSON.parse(localStorage.getItem(this.key)) :
            []);
    },
    postLocalStorage: function (value) {
        localStorage.setItem(this.key, JSON.stringify(value));
    },
    clearLocalStorage: function () {
        localStorage.clear();
    },
    initialize: function () {
        const library = this.getLocalStorage();
        if (!library) {
            return [];
        } else {
            return library;
        }
    }
}

export { LocalStorageObject }