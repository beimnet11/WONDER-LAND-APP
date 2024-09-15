import { createWelcomePageView } from "../views/welcomePageView.js";

export const searchCountry = async () => {

  const country = document.getElementById('search').value;

  if (country === '') {
   errorMessage();
  }
 
  try {
    const countryData = await fetch (`htttps://restcountries.com/v3.1/all`);
    const data = await countryData.json();

    // find the country by name

    const countryInfo = data.find((country) => country.name.common.toLowerCase() === country.toLowerCase());

    if (!countryInfo) {
      errorMessage();
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
    errorMessage();
  };
};