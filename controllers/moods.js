//const Mood = require('../models/mood');
//const moodController = {};
module.exports.index = (req,res) => {
  res.render('mood/index', {title: 'yang site'});
};
