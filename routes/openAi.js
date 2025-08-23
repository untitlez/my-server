const express = require("express");
const { openAi } = require("../controllers/openAi");

const router = express.Router();

router.post("/openAi", openAi);

module.exports = router;
