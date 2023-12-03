function saveLibrary() {
	localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

module.exports = saveLibrary;
