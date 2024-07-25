const router = require("express").Router();
const account = require("../../controllers/v1/account.controller");

router.post("/", account.createAccount);
module.exports = router