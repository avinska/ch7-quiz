const express = require('express')
router = express.Router()
const { Home } = require('../controller')

//homepage
router.get('/', Home)


module.exports = router