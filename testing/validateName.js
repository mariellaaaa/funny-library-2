function validateName(name) {
    const regex = /^[A-Z][a-z]*(?:\s[A-Z][a-z]*)*$/;
	return regex.test(name.trim());

}

module.exports = validateName;