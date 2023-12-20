const Router = require('express');
const router = new Router();
const usercontroller = require('../controllers/userController');

router.post('/registration', usercontroller.registration)
router.post('/login', usercontroller.login)
router.get('/auth', usercontroller.check)

module.exports = router
