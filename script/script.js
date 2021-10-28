function LocalStorageObject(key) {
    this.key = key;
}

LocalStorageObject.prototype = {
    getLocalStorage: function () {
        return JSON.parse(localStorage.getItem(this.key));
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

function Table(target, library) {
    this.target = target;
    this.library = library;
}

Table.prototype = {
    populateTable: function () {
        this.library.forEach(x => {
            const row = document.createElement("tr");
            for (let i in x) {
                const cell = document.createElement("td");
                cell.textContent = x[i];
                row.appendChild(cell);
            }
            this.target.appendChild(row);
        });
    },
    addRow: function () {

    },
    deleteRow: function () {

    },
    modifyRow: function() {

    }
};

function Book(title, author, pages, readInfo) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readInfo = readInfo;
}

const bookLocalStorage = new LocalStorageObject("books");
const library = bookLocalStorage.initialize();
console.log(library)

const table = new Table(document.querySelector("table"), library);
table.populateTable();



