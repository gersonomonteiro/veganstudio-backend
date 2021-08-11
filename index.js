const express = require("express");
const cors = require("cors");

const contestRouter = require("./src/routes/contest.routes");
require("./src/database");

var corsOptions = {
  origin: "http://10.4.9.7:4200",
};

app = express();
const http = require("http");
const server = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(cors(corsOptions));

app.use("/veganstudio", contestRouter);

app.get("/", (req, res) => {
  res.send({ message: "running" });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, (req, res) => {
  console.log(`Server is runnig on port ${PORT}.`);
});

module.exports = server;
