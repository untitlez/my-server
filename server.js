const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

app.listen(port, () => console.log(`Server running port ${port}`));
