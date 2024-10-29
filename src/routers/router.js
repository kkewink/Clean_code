const { Router } = require("express");
const router = Router();
const userRoutes = require('./usuarioRouter')
const adminRoutes = require('./adminRouter')


router.use('/user', userRoutes);
router.use('/admin', adminRoutes);

module.exports = router;