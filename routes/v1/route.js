const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const accountRoute = require("./account.route");

router.use("/users", userRoute);
router.use("/accounts", accountRoute);

module.exports = router