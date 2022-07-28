const router = require('express').Router();
const auth = require('../middlewares/auth');
const { getAllMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { checkMovie, checkMovieId } = require('../utils/validation/movieDataValidation');

router.get('/movies', auth, getAllMovies);
router.post('/movies', auth, checkMovie, createMovie);
router.delete('/movies/:_id', auth, checkMovieId, deleteMovie);

module.exports = router;
