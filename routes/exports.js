const express = require("express");
const { pdf } = require("../controllers/exports");

const router = express.Router();

router.get("/exports", pdf);

module.exports = router;
