const express = require("express");
const { read, search, list, remove } = require("../../controllers/lesson-plan");
const { onlyAdmin } = require("../../middleware/auth");

const router = express.Router();

router.get("/lesson-plan", read);
router.get("/lesson-plan/:id", list);
router.get("/lesson-plan", search);
router.delete("/lesson-plan/:id", remove, onlyAdmin);

module.exports = router;
