const { searchImages, getRandom } = require("../services/images");

exports.read = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.json("No Query");

    const results = await searchImages(query, 10);
    if (!results) return res.json("No Data");

    const imageUrl = getRandom(results);
    if (!imageUrl) return res.json("No Images");

    return res.json(imageUrl);
  } catch {
    res.status(500).json({ error: "Failed to fetch image" });
  }
};
