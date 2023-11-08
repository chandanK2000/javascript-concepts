const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  /* setName: { type: String, required: true },
  question: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
  negativeMarks: { type: String, required: true } */
  setName: String,
  question: String,
  options: [String],
  correctAnswer: String,
  negativeMarks: Number

});

module.exports = mongoose.model("QuestionModal", questionSchema);
