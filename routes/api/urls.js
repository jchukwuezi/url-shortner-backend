const express = require('express')
const router = express.Router()
//importing middleware to authenticate the user
const {getAuthUser} = require('../../middleware/auth')

const {
    addURL,
    getURLs
} = require('../../controllers/urlController')

router.post('/add', getAuthUser, addURL)

router.get('/get', getAuthUser, getURLs)


module.exports = router;