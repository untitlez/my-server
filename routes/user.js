const express = require("express");
const { read, list, update, remove } = require("../controllers/user");

const router = express.Router();

router.get("/user", read);
router.get("/user/:id", list);
router.put("/user/:id", update);
router.delete("/user/:id", remove);

module.exports = router;
