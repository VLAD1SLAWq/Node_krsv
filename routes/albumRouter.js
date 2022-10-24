const Router = require('express')
const router = new Router()
const albumController = require('../controllers/albumController')


router.post('/', albumController.create)
router.get('/',albumController.getAll)
router.delete('/:id',albumController.delete)


module.exports = router