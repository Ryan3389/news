const router = require('express').Router()
const newsRoutes = require('./newsRoutes')

router.use('/news', newsRoutes)

module.exports = router