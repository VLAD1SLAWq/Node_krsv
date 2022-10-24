const {Song} = require('../models/models')// 
const uuid = require('uuid')
const path = require('path')
const  ApiError = require('../error/ApiError')
class SongController{
    async create(req, res, next){
        try{
            const {name, artist, length, categoryId} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".mp3"
            file.mv(path.resolve(__dirname,'..','static',fileName))
            const song = await Song.create({name, artist, length, categoryId, file: fileName}) 
            return res.json(song)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
     let {categoryId} = req.query
        let songs;
        if(!categoryId ){
            songs = await Song.findAll()
        }

        if(categoryId ){
            songs = await Song.findAll({where:{categoryId}})

        }
        return res.json(songs)
    }

    async getOne(req, res){
        const {id} = req.params
        const song = await Song.findOne(
            {where: {id}}
        )
        return res.json(song)
    }

    async delete(req, res){
        const {id} = req.params
        const song = await Song.destroy(
            {where: {id}}
        )
        return res.json(song)
    }
}

module.exports = new SongController()