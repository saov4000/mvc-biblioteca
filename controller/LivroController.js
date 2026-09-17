const {Livro} = require('../model/Livro') //require é a forma de importar

class LivroController{
    //criar o registro de um livro
    static create(req,res){
        res.render('livro/create')
    }

    static async cadastrar(req,res){
        const livro = {
            titulo: req.body.title,
            autor: req.body.autor,
            genero: req.body.genre,
            ano: req.body.year
        }
        await Livro.save(livro)
        res.redirect('/livros')
    }

    static async listar(req,res){
        const livros = await Livro.findAll({raw:true})
        res.redirect('/livros/all',{livros})
    }

    static async remover(req,res){
        const id = req.body.id
        await Livro.destroy({where:{id:id}})
        res.redirect('/livros')
    }
}


module.exports = LivroController

