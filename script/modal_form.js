import { Book } from "./book.js";

function ModalForm(target) {
    this.target = target;
}

ModalForm.prototype = {
    show() {
        this.target.parentElement.style.display = "flex";
    },
    hide() {
        this.target.parentElement.style.display = "";
    },
    submit(event, table, library, bookLocalStorage) {
        event.preventDefault();
        const forms = event.currentTarget.querySelectorAll("input[type='text']");
        const text = event.currentTarget.querySelector("input[type='radio']:checked").value;
        const values = Array.from(forms).map(x => x.value);
        values.push(text);
        const book = new Book(values[0], values[1], values[2], values[3]);
        table.addRow(book);
        library.push(book);
        bookLocalStorage.postLocalStorage(library);
        this.clear();
        this.hide();
    },
    clear() {
        this.target.reset();
    }
}

export { ModalForm }