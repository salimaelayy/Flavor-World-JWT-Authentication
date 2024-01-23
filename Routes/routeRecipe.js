const express = require('express')
const router = express.Router()
const recipeController = require('../Controllers/recipeController')
const { validateToken } = require('../MiddleWares/tokenValidation')

const {
  validateRecipeInputEmpty,
  validate,
} = require('../MiddleWares/validators')

router.get('/', recipeController.readAll)
router.get('/readbyid/:id', recipeController.readById)
router.get('/readbytitle', recipeController.readByTitle)
router.post('/create', recipeController.create)
router.put('/update/:id', recipeController.updateById)
router.delete('/delete/:id', recipeController.deleteById)

module.exports = router
