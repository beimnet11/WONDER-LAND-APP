import { loadWelcomePage } from "./src/pages/welcomePage.js";

const loadApp = () => {

  loadWelcomePage(); 
};
window.addEventListener('load', loadApp);