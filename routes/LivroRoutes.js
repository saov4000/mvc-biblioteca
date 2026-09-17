const express = require('express') //importando a classe router
const router = express.Router() //criando o objeto

const LivroController = require('../controller/LivroController')

router.get('/add',LivroController.cadastrar)

module.exports = router
