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

test("saveLibrary should handle an empty library", () => {
	global.myLibrary = [];

	saveLibrary();

	expect(global.localStorage.setItem).toHaveBeenCalledWith(
		"myLibrary",
		JSON.stringify([])
	);
});

test("saveLibrary should handle errors from localStorage", () => {
	global.localStorage.setItem.mockImplementation(() => {
		throw new Error("localStorage is not available");
	});

	expect(() => {
		saveLibrary();
	}).toThrow("localStorage is not available");
});
