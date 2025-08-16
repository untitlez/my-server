const express = require("express");
const { read } = require("../controllers/images");

const router = express.Router();

router.get("/images", read);

module.exports = router;
