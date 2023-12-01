export function preventNonAlphabeticInput(event) {
	if (!event.key.match(/^[A-Za-z\s]$/)) {
		event.preventDefault();
		swal("Provide only English letters and spaces");
	}
}

export function validateName(name) {
	const regex = /^[A-Z][a-z]*(?:\s[A-Z][a-z]*)*$/;
	return regex.test(name.trim());
}
