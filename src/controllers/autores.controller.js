const AuthorModel = require('../models/autores.model')
const PostsModel = require('../models/posts.model')

const getAllAuthors = async (req,res) => {
    try {
        const [result] = await AuthorModel.selectAllAuthor()
        res.json(result)
    } catch (error) {
        res.json({falat: error.message})
    }
}

const getAuthorById = async (req,res) => {
    try {
        const {authorId} = req.params
        const [result] = await AuthorModel.selectAuthorById(authorId)
        res.json(result[0])
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const createAuthor = async (req,res) => {
    try {
        const [result] = await AuthorModel.insertAuthor(req.body)
        const [author] = await AuthorModel.selectAuthorById(result.insertId)
        res.json(author[0])
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const updateAuthor = async (req,res) => {
    try {
        const {authorId} = req.params
        const [result] = await AuthorModel.updateAuthorById(authorId,req.body)
        const [resultAuthor] = await AuthorModel.selectAuthorById(authorId)
        res.json(resultAuthor[0])
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const deleteAuthor = async (req,res) => {
    try {
        const {authorId} = req.params
        const [resultPosts] = await PostsModel.deleteAuthorPosts(authorId)
        const [resultAuthor] = await AuthorModel.deleteAuthorById(authorId)
        res.send(`Autor ${authorId} eliminado correctamente junto con todos sus posts.`)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

module.exports = {getAllAuthors,getAuthorById,createAuthor,updateAuthor,deleteAuthor}