exports.read = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) res.send("No Query");
    console.log("query", query);

    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&per_page=10&orientation=landscape&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (!data.results) res.send("No Data");
    console.log("data", data);

    const randomIndex = Math.floor(Math.random() * data.results.length);
    const imageUrl = data.results[randomIndex].urls.full;
    if (!imageUrl) res.send("No Images");
    console.log("imageUrl", imageUrl);

    res.send(imageUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to fetch image" });
  }
};
