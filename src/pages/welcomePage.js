import { createWelcomePageView } from "../views/welcomePageView.js";
import { errorMessage } from "./errorPages.js";
import { showLoading, hideLoading } from "../utility/loadPage.js";


export const searchCountry = async () => {

  const country = document.getElementById('search').value;

  if (country === '') {
   errorMessage();
   return;
  }

  showLoading();
 
  try {
    const countryData = await fetch (`https://restcountries.com/v3.1/all`);
    const data = await countryData.json();

    // find the country by name

    const countryInfo = data.find((c) => c.name.common.toLowerCase() === country.toLowerCase());

    if (!countryInfo) {
      hideLoading();  
      errorMessage();
      return;
    }

    // display the country info

    const resultContainer = document.getElementById('result-container');

    resultContainer.innerHTML = `
    <div class="country-info">
    <h2>${countryInfo.name.common}</h2>
    <p>Capital: ${countryInfo.capital}</p>
    <p>Population: ${countryInfo.population}</p>
    <p>Area: ${countryInfo.area}</p>
    <p>Region: ${countryInfo.region}</p>
    <img src="${countryInfo.flags.png}" alt="flag of ${countryInfo.name.common}">
    `;

    
  } catch (error) {
    console.error('error fetching country data', error);  // for debugging purposes
    errorMessage();
  } finally {
    hideLoading();
  }
};