export function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;

	this.updateTitle = function (newTitle) {
		this.title = newTitle;
	};

	this.updateAuthor = function (newAuthor) {
		this.author = newAuthor;
	};

	this.updatePages = function (newPages) {
		this.pages = newPages;
	};
}
