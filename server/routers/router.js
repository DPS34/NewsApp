const express = require('express')

const router = express.Router()

const controller = require('../controllers/main')


router.get('/search/:arg', controller.search)




module.exports = router