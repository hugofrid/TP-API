var express = require('express');
var router = express.Router();

var _ = require('lodash');

let movies = [{
  movie: "Arthur",
  id: "0"
}];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond moviieeessss');
});


/* GET one movie. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find movie in DB
  const movie = _.find(movies, ["id", id]);
  // Return user
  res.status(200).json({
    message: 'movies found!',
    movie 
  });
});


/* PUT new movie. */
router.put('/', (req, res) => {
  // Get the data from request from request
  const { movie } = req.body;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  users.push({ movie, id });
  // Return message
  res.json({
    message: `Just added ${id}`,
    user: { movie, id }
  });
});

/* DELETE user. */
router.delete('/:id', (req, res) => {
  // Get the :id of the movie we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(movies, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});


/* UPDATE movie. */
router.post('/:id', (req, res) => {
  // Get the :id of the movie we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the movie we want to update from the body of the request
  const { movie } = req.body;
  // Find in DB
  const movieToUpdate = _.find(movies, ["id", id]);
  // Update data with new data (js is by address)
  movieToUpdate.movie = movie;

  // Return message
  res.json({
    message: `Just updated ${id} with ${movie}`
  });
});


module.exports = router;
