const express = require("express");
const contestRouter = require("./src/routes/contest.routes");
require("./src/database");

app = express();
const http = require("http");
const server = http.Server(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use("/veganstudio", contestRouter);

app.get("/", (req, res) => {
  res.send({ message: "running" });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, (req, res) => {
  console.log(`Server is runnig on port ${PORT}.`);
});
