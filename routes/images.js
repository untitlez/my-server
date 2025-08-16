const express = require("express");
const { read, list, create, update, remove } = require("../controllers/images");

const router = express.Router();

router.get("/images", read);
// router.get("/images/:id", list);
// router.post("/images", create);
// router.put("/images/:id", update);
// router.delete("/images/:id", remove);

module.exports = router;
