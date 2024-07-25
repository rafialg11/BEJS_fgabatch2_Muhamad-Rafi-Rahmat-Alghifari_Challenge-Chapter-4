const router = require("express").Router();
const user = require("../../controllers/v1/user.controller");

router.post("/", user.createUser);
router.get("/", user.getAllUsers);
router.get("/:id", user.getOneUser);
module.exports = router;