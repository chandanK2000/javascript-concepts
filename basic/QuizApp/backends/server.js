const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://0.0.0.0:27017/quizapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

/* app.get("/", (req, res) => {
  res.send("Hello, Quiz App Backend chandan!");
}); */

const questionsRoute = require("./questions");
app.use("/questions", questionsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
