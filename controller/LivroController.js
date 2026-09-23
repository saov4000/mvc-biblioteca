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

    static async update(req,res){
        const id = req.params.id
        const livro = await Livro.findOne({where:{id:id}})
        res.render('livros/edit',{livro})
    }

    static async editar(req,res){
        
    }

    static async remover(req,res){
        const id = req.body.id
        await Livro.destroy({where:{id:id}})
        res.redirect('/livros')
    }
}

module.exports = LivroController

/*
const { Livro } = require('../model/Livro')

class LivroController {
    // Exibe o formulário de criação
    static create(req, res) {
        res.render('livros/create')
    }

    // Cadastra um novo livro
    static async cadastrar(req, res) {
        try {
            const { titulo, autor, genero, ano } = req.body

            // Validação básica
            if (!titulo || !autor || !genero || !ano) {
                return res.status(400).render('livros/create', {
                    erro: 'Todos os campos são obrigatórios.',
                    valores: req.body
                })
            }

            await Livro.create({
                titulo,
                autor,
                genero,
                ano: Number(ano)
            })

            return res.redirect('/livros')
        } catch (error) {
            console.error('Erro ao cadastrar livro:', error)
            return res.status(500).render('livros/create', {
                erro: 'Erro ao cadastrar o livro. Tente novamente.',
                valores: req.body
            })
        }
    }

    // Lista todos os livros
    static async listar(req, res) {
        try {
            const livros = await Livro.findAll({
                raw: true,
                order: [['titulo', 'ASC']]
            })
            return res.render('livros/all', { livros })
        } catch (error) {
            console.error('Erro ao listar livros:', error)
            return res.status(500).render('livros/all', {
                livros: [],
                erro: 'Erro ao carregar a lista de livros.'
            })
        }
    }

    // Exibe o formulário de edição com os dados do livro
    static async update(req, res) {
        try {
            const { id } = req.params
            const livro = await Livro.findOne({ where: { id }, raw: true })

            if (!livro) {
                return res.status(404).render('erro', {
                    mensagem: 'Livro não encontrado.'
                })
            }

            return res.render('livros/edit', { livro })
        } catch (error) {
            console.error('Erro ao buscar livro:', error)
            return res.status(500).render('erro', {
                mensagem: 'Erro ao carregar o livro.'
            })
        }
    }

    // Salva as alterações do livro
    static async editar(req, res) {
        try {
            const { id } = req.body
            const { titulo, autor, genero, ano } = req.body

            if (!id) {
                return res.status(400).redirect('/livros')
            }

            if (!titulo || !autor || !genero || !ano) {
                return res.status(400).render('livros/edit', {
                    erro: 'Todos os campos são obrigatórios.',
                    livro: { id, titulo, autor, genero, ano }
                })
            }

            const [atualizado] = await Livro.update(
                { titulo, autor, genero, ano: Number(ano) },
                { where: { id } }
            )

            if (!atualizado) {
                return res.status(404).render('erro', {
                    mensagem: 'Livro não encontrado para atualização.'
                })
            }

            return res.redirect('/livros')
        } catch (error) {
            console.error('Erro ao editar livro:', error)
            return res.status(500).render('erro', {
                mensagem: 'Erro ao atualizar o livro.'
            })
        }
    }

    // Remove um livro
    static async remover(req, res) {
        try {
            const { id } = req.body

            if (!id) {
                return res.status(400).redirect('/livros')
            }

            const removido = await Livro.destroy({ where: { id } })

            if (!removido) {
                return res.status(404).render('erro', {
                    mensagem: 'Livro não encontrado para remoção.'
                })
            }

            return res.redirect('/livros')
        } catch (error) {
            console.error('Erro ao remover livro:', error)
            return res.status(500).render('erro', {
                mensagem: 'Erro ao remover o livro.'
            })
        }
    }
}

module.exports = LivroController */