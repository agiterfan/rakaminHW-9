const express = require('express')
const router = express.Router()
const UserController = require('../controller/user_controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           format: int
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           format: varchar(255)
 *           description: The email of user
 *         password:
 *           type: string
 *           format: varchar(255)
 *           description: The password of user
 *         name:
 *           type: string
 *           format: varchar(255)
 *           description: The name of user
 *         createdAt:
 *           type: string
 *           format: timestamp
 *           description: The date of user was added
 *         updatedAt:
 *           type: string
 *           format: timestamp
 *           description: The date of user was updated
 *       example:
 *         id: 3
 *         email: admin@gmail.com
 *         password: admin
 *         name: admin
 *         category: action
 *         createdAt: 2023-12-12T12:27:18.532Z
 *         updatedAt: 2023-12-12T12:27:18.532Z
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Some server error
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: The user was not found
 *   put:
 *    summary: Update the user by the id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Users'
 *    responses:
 *      200:
 *        description: The user was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Users'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

router.get('/', UserController.getAll)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

module.exports = router;