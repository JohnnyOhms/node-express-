const asyncWrapper = (callback) => {
  return (req, res, next) => {
    try {
      callback(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = asyncWrapper;
