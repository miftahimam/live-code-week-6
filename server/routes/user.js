const express = require('express')
const router = express.Router()
const userController = require('../controller/user')


router.post('POST/register', userController.register)
router.post('POST/login', userController.login)


module.exports = router