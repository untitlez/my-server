const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
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

module.exports = mongoose.model("test", testSchema);
