import { Book } from "./book.js";
import { validateForm } from "./form-validation.js";
import {
	createReadSvg1,
	createReadSvg2,
	createDeleteSvg,
} from "./svgCreator.js";
import { resetForm } from "./resetForm.js";

let myLibrary = [];
let totalBooks = document.getElementById("total-books");

export function addBook(event) {
	event.preventDefault();

	if (!validateForm(event)) {
		return;
	}

	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").checked;

	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);

	saveLibrary();
	displayLibrary();
	resetForm();
}

export function deleteAllBooks() {
	myLibrary = [];
	totalBooks.innerHTML = "Total Books";
	saveLibrary();
	displayLibrary();
}

export function toggleReadStatus(index) {
	myLibrary[index].read = !myLibrary[index].read;
	saveLibrary();
	displayLibrary();
}

export function deleteBook(index) {
	myLibrary.splice(index, 1);
	saveLibrary();
	displayLibrary();
}

function saveLibrary() {
	localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function loadLibrary() {
	const savedLibrary = localStorage.getItem("myLibrary");
	if (savedLibrary) {
		const parsedLibrary = JSON.parse(savedLibrary);
		myLibrary = parsedLibrary.map(
			book => new Book(book.title, book.author, book.pages, book.read)
		);
		displayLibrary();
	}
}

function updateBookProperty(index, newValue, propertyName) {
	let bookToEdit = myLibrary[index];
	if (propertyName === "title") {
		bookToEdit.updateTitle(newValue);
	} else if (propertyName === "author") {
		bookToEdit.updateAuthor(newValue);
	} else if (propertyName === "pages") {
		bookToEdit.updatePages(newValue);
	}
	saveLibrary();
}

document.addEventListener("dblclick", function (event) {
	if (event.target.classList.contains("editable")) {
		event.target.readOnly = false;
	}
});

document.addEventListener(
	"blur",
	function (event) {
		if (event.target.classList.contains("editable")) {
			const propertyName = event.target.classList.contains("updatedTitle")
				? "title"
				: event.target.classList.contains("updatedAuthor")
				? "author"
				: "pages";

			if (event.target.value.trim() === "") {
				swal(`The ${propertyName} field cannot be empty.`).then(() => {
					event.target.focus();
				});
			} else {
				event.target.readOnly = true;
				updateBookProperty(
					event.target.dataset.index,
					event.target.value,
					propertyName
				);
			}
		}
	},
	true
);

export function displayLibrary() {
	let libraryDisplay = document.getElementById("libraryDisplay");
	libraryDisplay.innerHTML = "";

	let readCount = 0;
	let unreadCount = 0;

	myLibrary.forEach((book, i) => {
		let bookInfo = document.createElement("div");
		bookInfo.classList.add("book-container");

		bookInfo.innerHTML += `
          <div class="innerInput">
            <input type="text" value="${book.title}" class="editable updatedTitle" data-index="${i}" readonly />
            <label class="editLabel">Double click to edit</label> 
          </div>
          <div class="innerInput">
            <input type="text" value="${book.author}" class="editable updatedAuthor" data-index="${i}" readonly />
            <label class="editLabel">Double click to edit</label> 
          </div>
          <div class="innerInput">       
            <input type="number" value="${book.pages}" class="editable updatedPages" data-index="${i}" readonly />       
            <label class="editLabel">Double click to edit</label> 
          </div>       
        `;

		let readButton = document.createElement("button");
		readButton.classList.add("toggle-read-button", "icon-button");
		readButton.setAttribute("data-index", i);
		if (book.read) {
			readButton.appendChild(createReadSvg1());
		} else {
			readButton.appendChild(createReadSvg2());
		}
		bookInfo.appendChild(readButton);

		let deleteButton = document.createElement("button");
		deleteButton.classList.add("delete-button", "icon-button");
		deleteButton.setAttribute("data-index", i);
		deleteButton.appendChild(createDeleteSvg());
		bookInfo.appendChild(deleteButton);

		libraryDisplay.appendChild(bookInfo);

		if (book.read) {
			readCount++;
		} else {
			unreadCount++;
		}
	});

	document.getElementById("books-read").innerHTML = `Read Books: ${readCount}`;
	document.getElementById(
		"books-unread"
	).innerHTML = `Unread Books: ${unreadCount}`;

	totalBooks.innerHTML = `Total Books: ${myLibrary.length}`;
}

document.addEventListener("DOMContentLoaded", loadLibrary);
