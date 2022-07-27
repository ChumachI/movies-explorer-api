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
    owner: Joi.string().hex().length(24).required(),
    movieId: Joi.string().hex().length(24).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  checkMovie,
};
