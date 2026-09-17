const {DataTypes} = require('sequelize')

const connection = require('../db/connection')

//criando a tabela via ORM - define é = a um CREATE TABLE
const Livro = connection.define('Livro',{
    titulo:{type:DataTypes.STRING},
    autor:{type:DataTypes.STRING},
    genero:{type:DataTypes.STRING},
    ano:{type:DataTypes.INTEGER}
})

module.exports = Livro