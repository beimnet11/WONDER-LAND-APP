# Country Lookup and News Fetcher

![App screenshot](images/Screenshot%202024-09-17%20222030.png)

## Overview

This web application allows users to search for country information and fetch related news articles. The application provides details such as the country's capital, population, area, region, and flag. It also retrieves and displays the latest news articles related to the searched country.

## Features

![App screenshot](images/Screenshot%202024-09-17%20222500.png)

- Search for country information by name.
- Display details including capital, population, area, region, and flag.
- Fetch and show the latest news articles related to the country.
- User-friendly interface with loading indicators and error messages.

![App screenshot](images/Screenshot%202024-09-17%20222651.png)

## Technologies Used

- HTML
- CSS
- JavaScript
- [REST Countries API]( https://restcountries.com/v3.1/all) for fetching country data.
- [News API](https://newsapi.org/v2/everyting) for fetching news articles.

## How to Use

1. **Load the Welcome Page**:
   - The application initially loads a welcome page with a search functionality.

2. **Search for a Country**:
   - Enter the name of the country in the search box and click the "Search" button.
   - The application will display country information including the flag, capital, population, area, and region.
   - Latest news articles related to the country will also be shown.

3. **Error Handling**:
   - If no country is provided, an error message will be displayed.
   - Any errors during data fetching will also show an error message.

## File Structure

- `index.html` - Main HTML file.
- `styles.css` - Styles for the application.
- `scripts/`
  - `errorPages.js` - Handles error message display.
  - `loadPage.js` - Manages loading indicators.
  - `fetchNews.js` - Contains the function for fetching news articles.
  - `fetchCountry.js` - Contains the function for fetching country information.
  - `welcomePageView.js` - Creates and returns the welcome page view.
  - `app.js` - Main application logic, including search functionality and rendering.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/beimnet11/WONDER-LAND-APP.git

