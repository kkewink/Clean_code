const { Router } = require("express");
const adminController = require('../controllers/adminController');
const { validateAdmin, validateAdminId } = require("../middlewares/validadeAdmin");
const router = Router();

router.post('/', validateAdmin ,adminController.create);

router.post('/login', adminController.login);

router.get('/', adminController.getAll);

router.get('/:id',  validateAdminId, adminController.getOne);

router.put('/:id', validateAdmin ,adminController.update);

router.delete('/:id', validateAdminId ,adminController.delete);


module.exports = router;