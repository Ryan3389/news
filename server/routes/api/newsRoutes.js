const router = require('express').Router()

const { newsCategory } = require('../../controllers/newsControllers')

router.route('/category').get(newsCategory)

module.exports = router