const express = require("express");
const { signup, signin, signout } = require("../../controllers/auth");

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/signout", signout);

module.exports = router;
