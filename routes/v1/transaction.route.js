const router = require("express").Router();
const transaction = require("../../controllers/v1/transaction.controller");

router.post("/", transaction.createTransaction);

module.exports = router