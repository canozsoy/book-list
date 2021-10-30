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
        this.library.forEach((x, i) => {
            const row = document.createElement("tr");
            const index = document.createElement("td");
            index.textContent = i + 1;
            row.appendChild(index);
            for (let j in x) {
                const cell = document.createElement("td");
                cell.textContent = x[j];
                row.appendChild(cell);
            }
            this.target.appendChild(row);
        });
    },
    addRow: function () {
        const newRow = document.createElement("tr");
        Object.keys(this.library[0]).forEach(x => {
            const newCell = document.createElement("td");
            newRow.appendChild(newCell);
        })
        this.target.appendChild(newRow);
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

const table = new Table(document.querySelector("table"), library);
table.populateTable();

const rowAdder = document.querySelector("#content span");
rowAdder.addEventListener("click", () => {
    table.addRow();
});




