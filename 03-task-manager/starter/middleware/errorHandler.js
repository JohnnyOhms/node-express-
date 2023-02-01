const errorHandler = (err, req, res, next) => {
  if (err.message === `cannot find id`) {
    console.log(req.params);
    return res.status(404).send(`no id matches the DB`);
  }
  res.status(500).send({ success: false, mssg: "something went wrong" });
  next();
};

module.exports = errorHandler;
