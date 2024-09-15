import { searchCountry } from "./welcomePage.js";

export const errorMessage = () => {
  const userInterface = document.getElementById('user-interface');
  const errorFind = document.createElement('div');
  errorFind.innerHTML = `
  <h1> Oops! Country not found</h1>

  `
  userInterface.appendChild(errorFind);
}