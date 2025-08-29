const express = require("express");
const { read, list, update, remove } = require("../../controllers/user");
const { onlyAdmin } = require("../../middleware/auth");

const router = express.Router();

router.get("/user/:id", list);
router.put("/user/:id", update);
router.get("/user/", read, onlyAdmin);
router.delete("/user/:id", remove, onlyAdmin);

module.exports = router;
