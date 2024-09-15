 import { searchCountry } from '../pages/welcomePage.js';




export const createWelcomePageView = () => {

const userInterface = document.getElementById('user-interface');
const welcomePageView = document.createElement('div');
welcomePageView.innerHTML = `
<div class="welcome-page">
<h1> country Information Look Up</h1>

<input type ='text' id ='search' placeholder = 'Enter a country name'>
<button id = 'search-btn'>Search </button>
</div>
`


userInterface.appendChild(welcomePageView); 

document.getElementById('search-btn').addEventListener('click',searchCountry);

}


