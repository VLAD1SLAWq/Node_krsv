const {Album_song} = require('../models/models')
const  ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");
class AlbumSongController{
    async create(req, res){
        const {songId, albumId} = req.body
        const album_song = await Album_song.create({songId, albumId}) //везде так?
        return res.json(album_song)
    }

    async getAll(req, res){
        const album_song = await Album_song.findAll()
        return res.json(album_song)
    }

    async delete(req, res){
        const {id} = req.params
        const album_song = await Album_song.destroy(
            {where: {id}}
        )
        return res.json(album_song)
    }
}

module.exports = new AlbumSongController()