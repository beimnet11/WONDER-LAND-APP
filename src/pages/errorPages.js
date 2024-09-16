import { searchCountry } from "./welcomePage.js";

export const errorMessage = () => {
  const userInterface = document.getElementById('user-interface');
  
  // clear any existing previous error message

  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // create and append error message to the DOM

  const errorFind = document.createElement('div');
  
  
  errorFind.classList.add('error-message');
  errorFind.innerHTML = `
  <h1> Oops! Country not found</h1>

  `
  userInterface.appendChild(errorFind);
}