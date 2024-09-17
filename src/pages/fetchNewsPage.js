
export const fetchNewsData = async (countryName) => {
  const apiKey = '010bcef794cd4070b34f796b6b110317'; // Replace with your NewsAPI key
  const newsData = await fetch(`https://newsapi.org/v2/everything?q=${countryName}&apiKey=${apiKey}`);
  const news = await newsData.json();
  return news.articles;
};