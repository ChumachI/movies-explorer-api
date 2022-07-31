const router = require('express').Router();

const movieRouter = require('./movie');
const usersRouter = require('./user');
const notFound = require('./not-found');

router.use(
  usersRouter,
  movieRouter,
  notFound,
);

module.exports = router;
