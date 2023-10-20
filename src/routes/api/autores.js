const router = require('express').Router()
const AutoresController = require('../../controllers/autores.controller')
router.get('/',AutoresController.getAllAuthors)
router.post('/',AutoresController.createAuthor)
router.get('/:authorId',AutoresController.getAuthorById)
router.delete('/:authorId',AutoresController.deleteAuthor)
router.put('/:authorId',AutoresController.updateAuthor)

module.exports = router