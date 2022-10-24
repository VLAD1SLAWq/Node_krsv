const {Favorite} = require("../models/models");

class FavoriteController{
    async create(req, res){
        const {userId, songId} = req.body
        const favorite = await Favorite.create({userId, songId})
        return res.json({message:"Песня добавлена в избранное"})
    }
    async getAll(req, res){
        const favorite = await Favorite.findAll()
        return res.json(favorite)
    }
    async get(req, res){

    }
    async delete(req, res){

    }
}

module.exports = new FavoriteController()