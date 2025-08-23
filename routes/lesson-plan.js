const express = require("express");
const {
  read,
  search,
  list,
  create,
  update,
  remove,
} = require("../controllers/lesson-plan");

const router = express.Router();

router.get("/lesson-plan", read);
router.get("/lesson-plan/:id", list);
router.get("/lesson-plan", search);
router.post("/lesson-plan", create);
router.put("/lesson-plan/:id", update);
router.delete("/lesson-plan/:id", remove);

module.exports = router;
