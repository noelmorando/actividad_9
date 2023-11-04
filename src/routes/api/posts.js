const router = require('express').Router()
const PostsController = require('../../controllers/posts.controller')

router.get('/',PostsController.getAllPosts)
router.post('/',PostsController.createPost)
router.get('/:authorId',PostsController.getPostsByAutor)
router.put('/:postId',PostsController.updatePost)
router.delete('/:postId',PostsController.deletePost)

module.exports = router