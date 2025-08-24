exports.searchImages = async (query, perPage = 20) => {
  const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&orientation=landscape&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results;
};

exports.getRandom = (results) => {
  const randomIndex = Math.floor(Math.random() * results.length);
  return results[randomIndex].urls.full;
};
