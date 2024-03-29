const express = require('express');
const path = require('path');
//dbhelpers object
const dbHelpers = require('../database/databasehelpers').dbHelpers;
//api helpers object
const triviaHelpers = require('../client/src/assets/trivia_api_helpers').triviaHelpers;
//access questions database
const database = require('../database/index');
const questionsDB = require('../database/questions')
//require cors
const cors = require('cors');

const DIST_DIR = path.resolve(__dirname, '..', 'client/dist');

const router = require('./routes/index');

//morgan will intercept http requests and log them in terminal
// const morgan = require('morgan');
//body parser
const bodyParser = require('body-parser');

const app = express();

//enable cors
app.use(cors());
//use the tiny version of morgan showing the http method and ping
// app.use(morgan('tiny'));
//bodyParser config options
// parse application/x-www-form-urlencoded
app.use(express.static(DIST_DIR));

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
router(app);


let port = process.env.PORT || 3060;

//NOTE: UNCOMMENT FOR DEVELOPMENT
app.listen(port, function () {
  console.log(`listening on port ${port}`)
})


//NOTE: COMMENT THIS OUT FOR DEVELOPMENT
//THIS IS FOR DEPLOY
// app.listen(port, `142.93.13.248`)

//getting cors to work
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//handler for signing up
app.post('/sign_up',
  (request, response) => {
    //take the info from the fields
    const username = request.body.username;
    const userEmail = request.body.email;
    const userPassword = request.body.passwordinput;

    const userObject = {
      username,
      userEmail,
      userPassword
    }

    //save them to the database
    // const newUserReadyForSaving = dbHelpers.dbHelpers.n
    const newUserReadyForSaving = dbHelpers.userSignedUp(userObject);

    dbHelpers.saveUser(newUserReadyForSaving, response);
  });

//handler for submitting parameters for game
app.post('/gameCreation', (req, res) => {
  triviaHelpers.getQuestionsForCategoryAndDifficulty(req.body.categoryId, req.body.difficulty, (err, res, body) => {
    if (err) {
      console.error(err);
    } else {
      const parsedBody = JSON.parse(body);
      console.log(parsedBody, 'yo')
      parsedBody.results.forEach(question => {
        questionsDB.save({
          category: question.category,
          type: question.type,
          difficulty: question.difficulty,
          question: question.question,
          correct_answer: question.correct_answer,
          incorrect_answers: question.incorrect_answers
        })
      })
    }
  })
  res.sendStatus(201);
  res.end();
})
//get request to database to retrieve questions
app.get('/gameCreation', (req, res) => {
  questionsDB.findQuestions((err, data) => {
    if (err) {
      console.error(err);
    } else {
      const displayedQuestions = data.map(question => {
        return {
          category: question.category,
          difficulty: question.difficulty,
          question: question.question,
          correct_answer: question.correct_answer,
          incorrect_answers: question.incorrect_answers
        };
      })
      res.send(displayedQuestions);
    }
  })
})
//handler for changing the user stats that won the game
app.post('/gameover',
  (request, response) => {
    const userObjectThatWonTheGame = request.body
    //send the whole userObject to dbHelpers.updateUserAfterGame
    dbHelpers.updateUserAfterGame(userObjectThatWonTheGame);
    response.status(201, 'OK');
    console.log(response.body);
    response.end();
  });

//handler to display users on home page
app.get('/users', (req, res) => {
  database.findUser((err, users) => {
    if (err) {
      console.error(err);
    } else {
      const displayedUsers = users.map(user => {
        return {
          username: user.username,
          averageWinRate: user.averageWinRate,
          wins: user.wins,
          losses: user.losses
        }
      })
      res.send(displayedUsers);
    }
  })
})




