import { Book } from "./book.js";
import { validateForm } from "./form-validation.js";
import {
	createReadSvg1,
	createReadSvg2,
	createDeleteSvg,
} from "./svgCreator.js";

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

	document.getElementById("title").value = "";
	document.getElementById("author").value = "";
	document.getElementById("pages").value = "";
	document.getElementById("read").checked = false;
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
		myLibrary = JSON.parse(savedLibrary);
		displayLibrary();
	}
}

export function displayLibrary() {
	let libraryDisplay = document.getElementById("libraryDisplay");
	libraryDisplay.innerHTML = "";

	let readCount = 0;
	let unreadCount = 0;

	myLibrary.forEach((book, i) => {
		let bookInfo = document.createElement("div");
		bookInfo.classList.add("book-container");

		bookInfo.innerHTML += `
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
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
