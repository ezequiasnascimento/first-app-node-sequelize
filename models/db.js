const Sequelize = require('sequelize')

//conexão com banco de dados
const sequelize = new Sequelize('postapp', 'root', '88768895',{
    host: "localhost",
    dialect: "mysql"
})

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}