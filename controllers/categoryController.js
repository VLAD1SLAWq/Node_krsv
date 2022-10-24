const {Category} = require("../models/models");

class CategoryController{
    async create(req, res){
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }
    async getAll(req, res){ //req - то, что получается после гет/пост запроса(ввод данных); res - то, что отправляется на сервер(вывод данных)
        const category = await Category.findAll()
        return res.json(category)
    }
}

module.exports = new CategoryController() //