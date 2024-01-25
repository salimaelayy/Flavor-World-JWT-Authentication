const express = require('express')
const router = express.Router() 
const userController = require('../Controllers/userController')
const { validateToken } = require('../MiddleWares/tokenValidation')

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API operations related to users
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with a unique username and email
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: New user registered successfully
 *       '400':
 *         description: Bad request or user already exists
 *       '500':
 *         description: Internal server error
 */

router.post('/register', userController.register)

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login as a user
 *     description: Login with a registered username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *       '400':
 *         description: Bad request or invalid credentials
 *       '500':
 *         description: Internal server error
 */

router.post('/login', userController.login)
/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get user profile
 *     description: Get the profile of the authenticated user
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User profile retrieved successfully
 *       '400':
 *         description: Bad request or user not authenticated
 *       '500':
 *         description: Internal server error
 */
router.get('/profile', validateToken, userController.profile)

module.exports = router
