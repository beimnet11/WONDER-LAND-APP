# WONDER LAND

## Overview

The **Country Information Lookup** application allows users to search for information about countries. By entering the name of a country, users can view details such as its capital, population, area, region, and flag. The app provides a user-friendly interface with a loading spinner that appears while data is being fetched.

## Features

- **Country Search**: Users can type the name of a country into a search bar and click "Search" to retrieve information.
- **Country Details**: Displays details about the country, including:
  - Capital
  - Population
  - Area
  - Region
  - Flag
- **Loading Indicator**: A rotating spinner appears while the application is fetching data to indicate that a request is in progress.
- **Error Handling**: Displays appropriate error messages if the country is not found or if there is an issue with fetching data.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the user interface, including the loading spinner.
- **JavaScript**: For handling user interactions, fetching data from the REST Countries API, and updating the DOM.

## How It Works

1. **User Interaction**: Users enter the name of a country into the search input field and click the "Search" button.
2. **Data Fetching**: The application makes a request to the [REST Countries API](https://restcountries.com/v3.1/all) to fetch data about all countries.
3. **Display Results**: Once the data is received, the application finds the matching country and displays its details. If the country is not found, an error message is shown.
4. **Loading Spinner**: While the data is being fetched, a loading spinner is shown to indicate that the application is processing the request.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/beimnet11/WONDER-LAND-APP.git

