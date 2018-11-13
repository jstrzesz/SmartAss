import React, { Component } from 'react';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      questionsToDisplay: this.props.history.location.state.state.questions,
      reorderedQuestions: []
    }
    this.shuffle = this.shuffle.bind(this);
    this.redirectToGamePage = this.redirectToGamePage.bind(this);
    this.loadGamePage = this.loadGamePage.bind(this);
    this.fixQuestions = this.fixQuestions.bind(this);
    this.fixIncorrectAnswers = this.fixIncorrectAnswers.bind(this);
  }

  shuffle(array) {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }

  redirectToGamePage() {
    this.props.history.push('/gamePage', { gameQuestions: this.state.reorderedQuestions });
  }

  fixQuestions(array) {
    const newArr = [];
    array.forEach(question => {
      // console.log(question, 'line 31');
      question.question = question.question.replace(/&quot;/g, '"');
      question.question = question.question.replace(/`/g, '"');
      question.question = question.question.replace(/&#039;/g, '\'');
      question.question = question.question.replace(/&amp;/g, '&');
      question.question = question.question.replace(/&eacute;/g, 'é');
      question.question = question.question.replace(/&ldquo;/g, '"');
      question.question = question.question.replace(/&rsquo;/g, '\'');
      question.question = question.question.replace(/&hellip;/g, '_____');
      question.question = question.question.replace(/&rdquo;/g, ':');
      question.correct_answer = question.correct_answer.replace(/&quot;/g, '"');
      question.correct_answer = question.correct_answer.replace(/`/g, '"');
      question.correct_answer = question.correct_answer.replace(/&#039;/g, '\'');
      question.correct_answer = question.correct_answer.replace(/&amp;/g, '&');
      question.correct_answer = question.correct_answer.replace(/&eacute;/g, 'é');
      newArr.push(question);     
    })
    // console.log(newArr);
    return newArr;
    // const quotMatch = text.replace(/&quot;/g, '\\"')
  }

  fixIncorrectAnswers(array) {
    let correct_answer = '';
    
    array.forEach(question => {
      for (let i = 0; i < question.incorrect_answers.length; i++) {
        // correct_answer = question.correct_answer;
        console.log(question.incorrect_answers[i], 'line 55');
        question.incorrect_answers[i] = question.incorrect_answers[i].replace(/&quot;/g, '"');
        question.incorrect_answers[i] = question.incorrect_answers[i].replace(/`/g, '"');
        question.incorrect_answers[i] = question.incorrect_answers[i].replace(/&#039;/g, '\'');
        question.incorrect_answers[i] = question.incorrect_answers[i].replace(/&amp;/g, '&');
        question.incorrect_answers[i] = question.incorrect_answers[i].replace(/&eacute;/g, 'é');
        // question.incorrect_answers.push(correct_answer);
      }
      console.log(question.incorrect_answers, 'line 70')
      return question.incorrect_answers;
    })
    console.log(array, 'line 66');
    return array;
  }

  componentDidMount() {
    console.log(this.state.questionsToDisplay);
    this.fixIncorrectAnswers(this.state.questionsToDisplay);
    this.state.reorderedQuestions = this.shuffle(this.state.questionsToDisplay);
    console.log(this.state.reorderedQuestions);
    this.fixQuestions(this.state.reorderedQuestions);
    this.loadGamePage();
  }

  loadGamePage() {
    setTimeout(() => {
      this.redirectToGamePage();
    }, 1000)
  }

  render() {
    return (
      <div> Loading... </div>
      
    )
  }
}