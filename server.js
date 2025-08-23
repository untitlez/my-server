const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const { connectDB } = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
