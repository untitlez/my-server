const express = require("express");
const { verifyToken } = require("../middleware/auth");
const { admin, member, login, create } = require("../controllers/auth");

const router = express.Router();

router.post("/user/login", login);
router.post("/user", create);

router.get("/admin", verifyToken(["ADMIN"]), admin);
router.get("/member", verifyToken(["MEMBER", "ADMIN"]), member);

module.exports = router;
