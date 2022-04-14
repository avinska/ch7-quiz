const express = require('express')
router = express.Router()
const { Home, getAdd, postAdd, Delete } = require('../controller')

//homepage
router.get('/', Home)

//create
router.get('/add', getAdd)

router.post('/add', postAdd)

//delete
router.delete('/delete/:id', Delete);

module.exports = router