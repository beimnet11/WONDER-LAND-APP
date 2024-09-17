import { errorMessage } from './errorPages.js';
import { showLoading, hideLoading } from '../utility/loadPage.js';
import { createWelcomePageView } from '../views/welcomePageView.js';
import { fetchNews } from '../utility/fetchNews.js';
import { fetchCountry } from '../utility/fetchCountry.js';

// render welcome page and search functionality

export const loadWelcomePage = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.innerHTML = ''; // clear any previous

  const welcomeElement = createWelcomePageView();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById('search-btn')
    .addEventListener('click', searchCountry);
};
// Search Country and Fetch News
const searchCountry = async () => {
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
    const countryInfo = await fetchCountry(country);

    // Fetch news related to the country
    const newsArticles = await fetchNews(countryInfo.name.common);

    // const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `

      <div class="country-info">
        <h2>${countryInfo.name.common}</h2>
        <p>Capital: ${countryInfo.capital}</p>
        <p>Population: ${countryInfo.population}</p>
        <p>Area: ${countryInfo.area}</p>
        <p>Region: ${countryInfo.region}</p>
        <img src="${countryInfo.flags.png}" alt="flag of ${
      countryInfo.name.common
    }">
        
    


        <h3>Latest News</h3>
        ${newsArticles
          .map(
            (article) => `
          <div class="news-article">
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </div>
        `,
          )
          .join('')}
      </div>
    `;
  } catch (error) {
    console.error('Error fetching country', error);
    errorMessage();
  } finally {
    hideLoading();
  }
};
