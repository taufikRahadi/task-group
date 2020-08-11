const router = require('express').Router()

const UserController = require("../controllers/User")

router.get("/", UserController.read);
router.post("/", UserController.create);
router.get("/:id", UserController.find);
router.patch("/:id", UserController.update);
router.delete("/:id", UserController.delete);

module.exports = router
