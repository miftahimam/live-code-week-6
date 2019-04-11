const express = require('express')
const router = express.Router()
const jokeController = require('../controller/joke')

router.get('/', jokeController.fetchaRandomDadJoke)
router.get('/slack', jokeController.fetchaRandomDadJokeSlack)
router.get('/id', jokeController.fetchaDadJokeById)
router.get('/id.png', jokeController.fetchaDadJokeAsImage)
router.get('/search', jokeController.searchForDadJoke)
router.get('/graphQL', jokeController.graphQL)




module.exports = router