const router = require("express").Router();
const account = require("../../controllers/v1/account.controller");

router.post("/", account.createAccount);
router.get("/", account.getAllAccounts);
router.get("/:id", account.getOneAccount);
router.patch("/:id", account.changePin);
router.delete("/:id", account.deleteAccount);

module.exports = router;