export const fetchNews = async (countryName) => {
  const apiKey = '010bcef794cd4070b34f796b6b110317'; // Replace with your NewsAPI key
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${countryName}&apiKey=${apiKey}`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const news = await response.json();

  return filteredNews;
};
