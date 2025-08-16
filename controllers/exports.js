exports.pdf = async (req, res) => {
  try {
    res.send("Export PDF is loading...");
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to generate PDF" });
  }
};
