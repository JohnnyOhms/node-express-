const notFound = (req, res) => res.status(404).send("no page found");

module.exports = notFound;
