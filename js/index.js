import {
    addBook,
    deleteAllBooks,
    displayLibrary,
    deleteBook,
    toggleReadStatus,
} from "./modules/libraryFunctions.js";
  
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    if (form) {
        form.addEventListener("submit", addBook);
    } else {
        console.log("Form not found.");
    }
  
    document
        .getElementById("delete-all-books-button")
        .addEventListener("click", deleteAllBooks);
  
    document
        .getElementById("libraryDisplay")
        .addEventListener("click", function (event) {
            let target = event.target;
  
            if (target.tagName === "svg" || target.tagName === "path") {
                target = target.closest("button");
            }
  
            const indexStr = target.getAttribute("data-index");
            if (indexStr) {
                const index = parseInt(indexStr, 10);
  
                if (target.classList.contains("delete-button")) {
                    deleteBook(index);
                } else if (target.classList.contains("toggle-read-button")) {
                    toggleReadStatus(index);
                }
            }
        });
  
        displayLibrary();
});
  
window.deleteBook = deleteBook;
window.toggleReadStatus = toggleReadStatus;