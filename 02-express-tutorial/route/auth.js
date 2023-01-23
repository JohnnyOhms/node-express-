const authPost = (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).json({ success: false, mssg: "Input a value" });
  }
  res.status(200, { "Content-Type": "text/html" }).send(`welcome ${name}`);
};

module.exports = authPost;
