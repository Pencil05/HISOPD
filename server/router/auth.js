const express = require('express')
const router = express.Router()

const {register,login,checkrole} = require('../controller/auth')

router.post('/register',register)
router.post('/login',login)
router.get('/role',checkrole)

module.exports = router