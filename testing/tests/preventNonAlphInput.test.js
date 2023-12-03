const preventNonAlphabeticInput = require("../preventNonAlphInput");

global.swal = jest.fn();

test("Allows spaces", () => {
	const event = { key: " ", preventDefault: jest.fn() };
	preventNonAlphabeticInput(event);

	expect(event.preventDefault).not.toHaveBeenCalled();
	expect(global.swal).not.toHaveBeenCalled();
});

test("Prevents non-alphabetic characters", () => {
	const event = { key: "1", preventDefault: jest.fn() };
	preventNonAlphabeticInput(event);

	expect(event.preventDefault).toHaveBeenCalled();
	expect(global.swal).toHaveBeenCalledWith(
		"Provide only English letters and spaces"
	);
});

test("Prevents non-alphabetic characters including spaces", () => {
	const event = { key: "@", preventDefault: jest.fn() };
	preventNonAlphabeticInput(event);

	expect(event.preventDefault).toHaveBeenCalled();
	expect(global.swal).toHaveBeenCalledWith(
		"Provide only English letters and spaces"
	);
});

test("Prevents single digit", () => {
	const event = { key: "5", preventDefault: jest.fn() };
	preventNonAlphabeticInput(event);
	expect(event.preventDefault).toHaveBeenCalled();
	expect(global.swal).toHaveBeenCalledWith(
		"Provide only English letters and spaces"
	);
});

test("Prevents multiple digits", () => {
	const event = { key: "123", preventDefault: jest.fn() };
	preventNonAlphabeticInput(event);
	expect(event.preventDefault).toHaveBeenCalled();
	expect(global.swal).toHaveBeenCalledWith(
		"Provide only English letters and spaces"
	);
});
