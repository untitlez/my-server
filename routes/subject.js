const express = require("express");
const {
  read,
  query,
  create,
  update,
  remove,
} = require("../controllers/subject");

const router = express.Router();

router.get("/subject", read);
router.post("/subject", create);
router.put("/subject/:id", update);
router.delete("/subject/:id", remove);

module.exports = router;
