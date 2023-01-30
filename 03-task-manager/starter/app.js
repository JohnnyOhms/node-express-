const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connect = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/vi/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

port = process.env.PORT || 3001;
const start = async () => {
  try {
    await connect(process.env.MONGOBD_URL);
    console.log("connected to db");
    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  } catch (err) {
    console.log(err);
    console.log("there was an error starting up the server");
  }
};

start();
