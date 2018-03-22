const db = require('../db/config');
const Mood = {};

Mood.displayAll = () => {
  return db.query('SELECT * FROM moods ORDER BY id ASC');
};

module.exports = Mood;
