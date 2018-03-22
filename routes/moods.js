const express = require('express');
const moodRouter = express.Router();
const moodController = require('../controllers/moods');

moodRouter.get('/', moodController.index);

module.exports = moodRouter;
