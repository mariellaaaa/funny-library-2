
function preventNonAlphabeticInput(event) {
    if (!event.key.match(/^[A-Za-z\s]$/)) {
      swal("Provide only English letters and spaces");
      event.preventDefault();
    }
}

module.exports = preventNonAlphabeticInput;