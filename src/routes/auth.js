const router = require('express').Router()
const AuthController = require('../controllers/auth-controller')
const auth = require('../middleware/auth')

router.post('/signup', AuthController.signup)
router.post('/login', AuthController.login)
router.get('/current-user', auth, AuthController.currentUser)

module.exports = router
