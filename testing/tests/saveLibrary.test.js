const saveLibrary = require("../saveLibrary");

global.localStorage = {
	setItem: jest.fn(),
};

global.myLibrary = [{ title: "Book 1", author: "Author 1" }];

test("saveLibrary should save the library to localStorage", () => {
	saveLibrary();

	expect(global.localStorage.setItem).toHaveBeenCalledWith(
		"myLibrary",
		JSON.stringify(myLibrary)
	);
});
