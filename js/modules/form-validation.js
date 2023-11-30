import {
    preventNonAlphabeticInput,
    validateName,
} from "./validationHelpers.js";
  
const author = document.getElementById("author");
const libraryDisplay = document.getElementById("libraryDisplay");
  
author.addEventListener("keypress", preventNonAlphabeticInput);
  
export function validateForm(event) {
    let isValid = true;
  
    if (!validateName(author.value)) {
        event.preventDefault();
        swal("Author's name must contain min 2 letters starting with CAPITAL one.");
        author.classList.add("form__input--error");
        libraryDisplay.innerHTML = "";
        isValid = false;
    } else {
        author.classList.remove("form__input--error");
    }
  
    return isValid;
}