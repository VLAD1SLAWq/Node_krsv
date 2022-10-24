const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    username:{type:DataTypes.STRING,unique: true,},
    email:{type:DataTypes.STRING,unique: true,},
    password:{type:DataTypes.STRING,},
    role:{type:DataTypes.STRING, defaultValue:'USER'},
})

const Song = sequelize.define('song', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    artist: {type: DataTypes.TEXT, },
    length: {type: DataTypes.INTEGER, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false},  
})



const Album_song = sequelize.define('album_song', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})
const Favorite = sequelize.define('favorite', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},//две связи юзер и товар
})
const Album = sequelize.define('album', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},//две связи юзер и товар
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    qty: {type: DataTypes.INTEGER, allowNull: false},
})


User.hasMany(Favorite)
Favorite.belongsTo(User)

Album.hasMany(Album_song)
Album_song.belongsTo(Album)

Category.hasMany(Song)
Song.belongsTo(Category)

Song.hasMany(Album_song)
Album_song.belongsTo(Song)

Song.hasMany(Favorite)
Favorite.belongsTo(Song)

module.exports = {
    User,
    Album,
    Album_song,
    Song,
    Category,
    Favorite
}