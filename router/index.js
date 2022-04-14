const express = require('express')
router = express.Router()
const {
    Home,
    getAdd,
    postAdd
} = require('../controller')


//homepage
router.get('/', Home)

//create
router.get('/add', getAdd)

router.post('/add', postAdd)

module.exports = router