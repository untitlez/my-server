const mongoose = require("mongoose");

const imagesSchema = mongoose.Schema(
  {
    name: String,
    detail: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("images", imagesSchema);
