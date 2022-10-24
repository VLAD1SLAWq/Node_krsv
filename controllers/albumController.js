const {Album} = require('../models/models')
const  ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");
class AlbumController{
    async create(req, res){
        const {name, qty} = req.body
        const album = await Album.create({name, qty})
        return res.json(album)
    }

    async getOne(req, res){
        const {cartId} = req.params
        const cart_product = await Cart_product.findOne({where: {cartId:req.user.id}})
        return res.json(cart_product)
    }

    async getAll(req, res){
        const album = await Album.findAll()
        return res.json(album)
    }

    async delete(req, res){
        const {id} = req.params
        const album = await Album.destroy(
            {where: {id}}
        )
        return res.json(album)
    }
}

module.exports = new AlbumController()