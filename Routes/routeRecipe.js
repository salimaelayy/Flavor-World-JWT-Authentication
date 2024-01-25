const express = require('express')
const router = express.Router()
const recipeController = require('../Controllers/recipeController')
const { validateToken } = require('../MiddleWares/tokenValidation')

const {
  validateRecipeInputEmpty,
  validate,
} = require('../MiddleWares/validators')

/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: API operations related to recipes
 */

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: Retrieve a list of recipes
 *     description: Retrieve a list of recipes from the database
 *     responses:
 *       '200':
 *         description: A list of recipes
 *       '500':
 *         description: Internal server error
 */
router.get('/',  recipeController.readAll);

/**
 * @swagger
 * /recipes/readbyid/:id:
 *   get:
 *     summary: Retrieve a recipe by ID
 *     description: Retrieve a recipe from the database by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the recipe
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The requested recipe
 *       '404':
 *         description: Recipe not found
 *       '500':
 *         description: Internal server error
 */
router.get('/readbyid/:id',  recipeController.readById);
/**
 * @swagger
 * /recipes/readbytitle:
 *   get:
 *     summary: Retrieve a recipe by title
 *     description: Retrieve a recipe from the database by its title
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         description: Title of the recipe
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The requested recipe
 *       '404':
 *         description: Recipe not found
 *       '500':
 *         description: Internal server error
 */

router.get('/readbytitle', recipeController.readByTitle);

/**
 * @swagger
 * /recipes/create:
 *   post:
 *     summary: Create a new recipe
 *     description: Create a new recipe in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               category:
 *                 type: string
 *               author:
 *                 type: string
 *               origin:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               steps:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: New recipe added successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */

router.post('/create', validateToken, recipeController.create);
/**
 * @swagger
 * /recipes/update/{id}:
 *   put:
 *     summary: Update a recipe by ID
 *     description: Update a recipe in the database by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the recipe to be updated
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               category:
 *                 type: string
 *               author:
 *                 type: string
 *               origin:
 *                 type: string
 *               ingredients:
 *                 type: array
 *                 items:
 *                   type: string
 *               steps:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       '200':
 *         description: Recipe updated successfully
 *       '404':
 *         description: Recipe not found
 *       '500':
 *         description: Internal server error
 */
router.put('/update/:id', validateToken, recipeController.updateById);

/**
 * @swagger
 * /recipes/delete/{id}:
 *   delete:
 *     summary: Delete a recipe by ID
 *     description: Delete a recipe from the database by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the recipe to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Recipe deleted successfully
 *       '404':
 *         description: Recipe not found
 *       '500':
 *         description: Internal server error
 */

router.delete('/delete/:id', validateToken, recipeController.deleteById);
module.exports = router
