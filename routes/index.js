const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const favoriteRouter = require('./favoriteRouter')
const songRouter = require('./songRouter')
const userRouter = require('./userRouter')
const albumRouter = require('./albumRouter')
const albumSongRouter = require('./albumSongRouter')



router.use('/user', userRouter)
router.use('/song',songRouter)
router.use('/category', categoryRouter)
router.use('/favorite',favoriteRouter)
router.use('/album', albumRouter)
router.use('/albumSong', albumSongRouter)


module.exports = router