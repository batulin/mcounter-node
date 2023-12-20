const Router = require('express');
const router = new Router();
const usercontroller = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', usercontroller.registration)
router.post('/login', usercontroller.login)
router.get('/auth', authMiddleware, usercontroller.check)

module.exports = router
