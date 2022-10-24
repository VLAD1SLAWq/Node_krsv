const Router = require('express')
const router = new Router()
const albumSongController = require('../controllers/albumSongController')



router.post('/', albumSongController.create)
router.get('/',albumSongController.getAll)
router.delete('/:id',albumSongController.delete)

module.exports = router