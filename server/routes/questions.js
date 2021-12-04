const express = require('express');
// const router = express.Router();
const axios = require('axios');

const questionRouter = express.Router();

// questionRouter.use((req, res, next) => { next() })

questionRouter.post('/', (req, res) => {
  const { difficulty } = req.body;
  console.log(difficulty)
  // https://opentdb.com/api.php?amount=10&category=15&difficulty=hard&type=multiple
  axios.get(`https://opentdb.com/api.php?amount=10&category=15&difficulty=${difficulty}&type=multiple`)
    .then(({ data }) => {
      console.log(data, 'line 15')
      res.status(200).send(data)
    })
    .catch(err => console.log(err))
})

module.exports = questionRouter;
