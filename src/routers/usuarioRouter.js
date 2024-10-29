const { Router } = require("express");
const userController = require('../controllers/UserController');
const { validateUser, validateUserId } = require("../middlewares/validadeUser");
const router = Router();

router.post('/', validateUser, userController.create);

router.put('/:id', validateUser, userController.update);

router.delete('/:id', validateUserId, userController.delete);

router.get('/:id', validateUserId, userController.getOne);

router.get('/',  userController.getAll);

module.exports = router;
