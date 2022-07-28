const Movie = require('../models/movie');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

const {
  STATUS_OK,
  STATUS_CREATED,
} = require('../utils/constants');

module.exports.getAllMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.status(STATUS_OK).send({ data: movies });
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  Movie.create(req.body)
    .then((movie) => {
      res.status(STATUS_CREATED).send({ data: movie });
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  const { _id } = req.params;
  const userId = req.user._id;
  Movie.findById(_id)
    .orFail(new NotFoundError('Фильм с указанным _id не найден.'))
    .then((movie) => {
      if (JSON.stringify(userId) !== JSON.stringify(movie.owner)) {
        throw new ForbiddenError('Недостаточно прав для удаления карточки');
      } else {
        Movie.findByIdAndRemove(_id)
          .then((deletedMovie) => {
            res.status(STATUS_OK).send({ data: deletedMovie });
          })
          .catch(next);
      }
    })
    .catch(next);
};