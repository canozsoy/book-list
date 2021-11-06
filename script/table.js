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
    addRow: function (book) {
        const newRow = document.createElement("tr");
        const index = document.createElement("td");
        index.textContent = +document.querySelectorAll("tr:last-child")[1]?.cells[0].textContent + 1 || 1;
        newRow.appendChild(index);
        Object.keys(book).forEach((x, i) => {
            const newCell = document.createElement("td");
            const keys = Object.keys(book);
            newCell.textContent = book[keys[i]];
            newRow.appendChild(newCell);
        })
        this.target.appendChild(newRow);
    },
    deleteRow: function () {

    },
    modifyRow: function () {

    }
};

export { Table }