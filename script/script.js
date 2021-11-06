import { LocalStorageObject } from "./local_storage.js";
import { Table } from "./table.js";
import { ModalForm } from "./modal_form.js";

// Initialize data and table

const bookLocalStorage = new LocalStorageObject("books");
const library = bookLocalStorage.initialize();

const table = new Table(document.querySelector("table"), library);
table.populateTable();

const modalForm = new ModalForm(document.querySelector("#book_form"));

// Event listeners

const rowAdder = document.querySelector("#content span");
rowAdder.addEventListener("click", () => {
    modalForm.show();
});

const closeButton = document.querySelector(".close_button");
closeButton.addEventListener("click", () => {
    modalForm.hide();
})

modalForm.target.addEventListener("submit", (event) => {
    modalForm.submit(event, table, library, bookLocalStorage);
})





