const router = require("express").Router();
const transaction = require("../../controllers/v1/transaction.controller");

router.post("/", transaction.createTransaction);
router.get("/", transaction.getAllTransactions);
router.get("/:id", transaction.getOneTransaction);

module.exports = router