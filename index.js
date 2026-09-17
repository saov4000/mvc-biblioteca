const express = require('express')
const exphb = require('express-handlebars')

const app = express()

const connection = require('./db/connection')
const Livro = require('./model/Livro')

const livroRoutes = require('./routes/LivroRoutes')

//cria a comunicação entre o html e o mvc
app.engine('handlebars',exphb.engine())
app.set('view engine','handlebars')

app.use(
    express.urlencoded({extended:true})
)
//configuração para usar o json e acessar a pasta public
//na pasta pulic teremos css html etc
app.use(express.json())
app.use(express.static('public')) 
app.use('/livros',livroRoutes)

connection.sync().then(()=>{
    app.listen(3000)
}).catch((error)=>console.log(error))
