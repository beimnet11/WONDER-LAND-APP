import { loadWelcomePage } from "./src/pages/welcomePage.js";

const loadApp = () => {

  loadWelcomePage(); // This will create and append the welcome page to the DOM
};
window.addEventListener('load', loadApp);