const {
	preventNonAlphabeticInput,
	validateName,
} = require("../../js/modules/validationHelpers");

global.swal = jest.fn();

describe("preventNonAlphabeticInput", () => {
	const mockEvent = {
		key: "",
		preventDefault: jest.fn(),
	};

	beforeEach(() => {
		global.swal.mockClear();
		mockEvent.preventDefault.mockClear();
	});

	test("allows alphabetic characters", () => {
		mockEvent.key = "a";
		preventNonAlphabeticInput(mockEvent);
		expect(mockEvent.preventDefault).not.toHaveBeenCalled();
		expect(global.swal).not.toHaveBeenCalled();
	});

	test("allows space character", () => {
		mockEvent.key = " ";
		preventNonAlphabeticInput(mockEvent);
		expect(mockEvent.preventDefault).not.toHaveBeenCalled();
		expect(global.swal).not.toHaveBeenCalled();
	});

	test("prevents non-alphabetic characters", () => {
		mockEvent.key = "1";
		preventNonAlphabeticInput(mockEvent);
		expect(mockEvent.preventDefault).toHaveBeenCalled();
		expect(global.swal).toHaveBeenCalledWith(
			"Provide only English letters and spaces"
		);
	});
});

describe("validateName", () => {
	test("returns true for valid names", () => {
		expect(validateName("John Doe")).toBeTruthy();
		expect(validateName("John")).toBeTruthy();
	});

	test("returns false for invalid names", () => {
		expect(validateName("john")).toBeFalsy();
		expect(validateName("JJohn")).toBeFalsy();
	});
});
