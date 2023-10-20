const PostsModel = require('../models/posts.model')

const getAllPosts = async (req,res) => {
    try {
        const [result] = await PostsModel.selectAllPosts()
        res.json(result)
    } catch (error) {
        res.json({falat: error.message})
    }
}

const getPostById = async (req,res) => {
    try {
        const {postId} = req.params
        const [result] = await PostsModel.selectPostById(postId)
        res.json(result[0])
    } catch (error) {
        res.json({falat: error.message})
    }
}

const createPost = async (req,res) => {
    try {
        const [result] = await PostsModel.insertPost(req.body)
        const [post] = await PostsModel.selectPostById(result.insertId)
        res.json(post[0])
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const updatePost = async (req,res) => {
    try {
        const {postId} = req.params
        const [result] = await PostsModel.updatePostById(postId,req.body)
        const [resultPost] = await PostsModel.selectPostById(postId)
        res.json(resultPost[0])
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const deletePost = async (req,res) => {
    try {
        const {postId} = req.params
        const [result] = await PostsModel.deletePostById(postId)
        res.send(`Post ${postId} eliminado correctamente.`)
    } catch (error) {
        res.json({fatal: error.message})
    }
}

const deleteAuthorPosts = (AuthorId) => {
    return db.query("delete from posts where autor_id=?",[AuthorId])
}

module.exports = {getAllPosts,getPostById,createPost,updatePost,deletePost,deleteAuthorPosts}