export const fetchCountry = async (countryName) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch country');
  }
  const country = await response.json();
  return country[0];
};

