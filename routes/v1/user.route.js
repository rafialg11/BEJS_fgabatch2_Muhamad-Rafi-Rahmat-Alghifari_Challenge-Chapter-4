const router = require("express").Router();
const user = require("../../controllers/v1/user.controller");

router.post("/", user.createUser);
router.get("/", user.getAllUsers);
router.get("/:id", user.getOneUser);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);

module.exports = router;