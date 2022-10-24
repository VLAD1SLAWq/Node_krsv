const Router = require('express')
const router = new Router()
const SongController = require('../controllers/songController')
const checkRole =require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), SongController.create)
router.get('/',SongController.getAll)
router.get('/:id',SongController.getOne)
router.delete('/:id',SongController.delete)



module.exports = router