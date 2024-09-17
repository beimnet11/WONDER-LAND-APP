

import { errorMessage } from "./errorPages.js";
import { showLoading, hideLoading } from "../utility/loadPage.js";
import { createWelcomePageView } from "../views/welcomePageView.js";
import { fetchNewsData } from "./fetchNewsPage.js";

// Fetch News Information

fetchNewsData();
// render welcome page and search functionality

export const loadWelcomePage = () => {
  const userInterface = document.getElementById('user-interface');
   userInterface.innerHTML = ''; // clear any previous
  
  const welcomeElement = createWelcomePageView();
  userInterface.appendChild(welcomeElement);
  
  document
  .getElementById('search-btn')
  .addEventListener('click',searchCountry);
};
// Search Country and Fetch News
export const searchCountry = async () => {
  const country = document.getElementById('search').value;

  // clear previous result and error message

  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = ''; // clear any previous result

  // clear previous error message

  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }


  if (country === '') {
    errorMessage();
    return;
  }

  showLoading();
  
  try {
    const countryData = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await countryData.json();
    const countryInfo = data[0];

    if (!countryData.ok) {
      hideLoading();
      throw new Error('Country not found');
    }


    // Fetch news related to the country
    const newsArticles = await fetchNewsData(countryInfo.name.common);

   // const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `

      <div class="country-info">
        <h2>${countryInfo.name.common}</h2>
        <p>Capital: ${countryInfo.capital}</p>
        <p>Population: ${countryInfo.population}</p>
        <p>Area: ${countryInfo.area}</p>
        <p>Region: ${countryInfo.region}</p>
        <img src="${countryInfo.flags.png}" alt="flag of ${countryInfo.name.common}">
        
    


        <h3>Latest News</h3>
        ${newsArticles.map(article => `
          <div class="news-article">
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </div>
        `).join('')}
      </div>
    `;
  } catch (error) {
    console.error('Error fetching country', error);
    errorMessage();
  } finally {
    hideLoading();
  }
};


