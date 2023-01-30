const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ mssg: "something went wrong, try again" });
};

module.exports = errorHandler;
