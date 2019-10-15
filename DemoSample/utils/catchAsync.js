module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next); //here next is equal to err => next(err)
  };
};
