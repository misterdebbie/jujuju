const Mood = require('../models/mood');

const moodController = {};

moodController.displayAll = (req,res) => {
  Mood.displayAll()
    .then(moods => {
      res.render('mood/index', {
        moods: moods
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = moodController;
