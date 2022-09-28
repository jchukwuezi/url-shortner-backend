const express = require('express')
const router = express.Router()

const {
    createUser,
    checkUser
} = require('../../controllers/userController')





module.exports = router;