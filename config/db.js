const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
  } catch {
    process.exit(1);
  }
};
