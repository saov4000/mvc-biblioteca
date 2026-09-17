const {Sequelize} = require('sequelize') //importando a Classe Sequelize

const sequelize = new Sequelize(
    'biblioteca','root','',{host:'localhost',dialect:'mysql'}) //criando objeto sequelize

try{
    sequelize.authenticate()
    console.log("Conexão realizada com sucesso!")
}catch(error){
    console.log(`Falha ao conectar: ${error}`)
}

module.exports = sequelize



