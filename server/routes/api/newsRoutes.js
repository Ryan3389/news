const router = require('express').Router()

const { newsCategory, searchNews } = require('../../controllers/newsControllers')

router.route('/category').get(newsCategory)
router.route('/search').post(searchNews)

module.exports = router