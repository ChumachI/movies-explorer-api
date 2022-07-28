module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  const errorMessage = statusCode === 500 ? 'На сервере произошла ошибка' + `${err.name}`: message;
  res.status(statusCode).send({ message: errorMessage });
  next();
};
