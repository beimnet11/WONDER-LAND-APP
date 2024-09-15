import {createWelcomePageView} from './src/views/welcomePageView.js';

const loadApp = () => {
  createWelcomePageView(); // This will create and append the welcome page to the DOM
};
window.addEventListener('load', loadApp);