const express = require("express");
const { verifyToken } = require("../middleware/auth");
const { admin, member } = require("../controllers/auth");

const router = express.Router();

router.get("/admin", verifyToken(["ADMIN"]), admin);
router.get("/member", verifyToken(["MEMBER", "ADMIN"]), member);

module.exports = router;
