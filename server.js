const fs = require("fs");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const { verifyToken, checkRole } = require("./middleware/auth");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.DOMAIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

fs.readdirSync("./routes/public").map((r) =>
  app.use("/api", require("./routes/public/" + r))
);

fs.readdirSync("./routes/private").map((r) =>
  app.use("/api", require("./routes/private/" + r), verifyToken, checkRole)
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
