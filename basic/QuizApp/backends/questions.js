const express = require("express");
const router = express.Router();
const QuestionModal = require("./questionmodels");


router.get('/', async (req, res) => {
  try {
    const questions = await QuestionModal.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const newQuestion = new QuestionModal({
      setName: req.body.setName,
      question: req.body.question,
      options: req.body.options,
      correctAnswer: req.body.correctAnswer,
      negativeMarks: req.body.negativeMarks
    });
    let questions = await newQuestion.save();
    res.status(201).json(questions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



router.delete('/:id', async (req, res) => {
  try {
    const question = await QuestionModal.findByIdAndDelete(req.params.id);

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
