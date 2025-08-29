const express = require("express");
const { create, update, remove } = require("../../controllers/subject");
const { onlyAdmin } = require("../../middleware/auth");

const router = express.Router();

router.post("/subject", create);
router.put("/subject/:id", update, onlyAdmin);
router.delete("/subject/:id", remove, onlyAdmin);

module.exports = router;
