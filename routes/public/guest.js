const express = require("express");
const { lated, create } = require("../../controllers/lesson-plan");
const { read } = require("../../controllers/subject");

const router = express.Router();

router.get("/subject", read);
router.get("/lesson-plan/guest", lated);
router.post("/lesson-plan", create);

module.exports = router;
