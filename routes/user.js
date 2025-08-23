const express = require("express");
const {
  read,
  list,
  login,
  create,
  update,
  remove,
} = require("../controllers/user");

const router = express.Router();

router.get("/user", read);
router.get("/user/:id", list);
router.post("/user/login", login);
router.post("/user", create);
router.put("/user/:id", update);
router.delete("/user/:id", remove);

module.exports = router;
