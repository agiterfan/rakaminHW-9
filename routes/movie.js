const express = require('express')
const router = express.Router()
const MovieController = require('../controller/movie_controller')
const auth = require('../middleware/auth')

/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - name
 *         - category
 *       properties:
 *         id:
 *           type: integer
 *           format: int
 *           description: The auto-generated id of the movie
 *         name:
 *           type: string
 *           format: varchar(255)
 *           description: The title of the movie
 *         category:
 *           type: string
 *           format: varchar(255)
 *           description: The genre of the movie
 *         createdAt:
 *           type: string
 *           format: timestamp
 *           description: The date of movie was added
 *         updatedAt:
 *           type: string
 *           format: timestamp
 *           description: The date of movie was updated
 *       example:
 *         id: 1
 *         name: Avengers
 *         category: action
 *         createdAt: 2023-12-12T12:27:18.538Z
 *         updatedAt: 2023-12-12T12:27:18.538Z
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Lists all the movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *   post:
 *     summary: Create a new movie
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/movies'
 *     responses:
 *       200:
 *         description: The created movie.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/movies'
 *       500:
 *         description: Some server error
 * /movies/{id}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movies'
 *       404:
 *         description: The movie was not found
 *   put:
 *    summary: Update the movie by the id
 *    tags: [Movies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The movie id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Movies'
 *    responses:
 *      200:
 *        description: The movie was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Movies'
 *      404:
 *        description: The movie was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *
 *     responses:
 *       200:
 *         description: The movie was deleted
 *       404:
 *         description: The movie was not found
 */

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', auth, MovieController.create)
router.put('/:id', auth, MovieController.update)
router.delete('/:id', auth, MovieController.delete)

module.exports = router;