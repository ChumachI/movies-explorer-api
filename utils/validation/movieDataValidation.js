const { celebrate, Joi } = require('celebrate');

const checkMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(/^https?:\/\/(www.)?[\w-._~:/?#[\]@!$&'()*+,;=]+#?\b/).required(),
    trailerLink: Joi.string().pattern(/^https?:\/\/(www.)?[\w-._~:/?#[\]@!$&'()*+,;=]+#?\b/).required(),
    thumbnail: Joi.string().pattern(/^https?:\/\/(www.)?[\w-._~:/?#[\]@!$&'()*+,;=]+#?\b/).required(),
    movieId: Joi.number().integer().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  checkMovie,
};
