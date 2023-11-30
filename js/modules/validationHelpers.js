export function preventNonAlphabeticInput(event) {
    if (!event.key.match(/^[A-Za-z\s]$/)) {
      swal("Provide only English letters and spaces");
      event.preventDefault();
    }
}
  
export function validateName(name) {
    const regex = /^[A-Z][a-z]*(?:\s[A-Z][a-z]*)*$/;
    return regex.test(name.trim());
}