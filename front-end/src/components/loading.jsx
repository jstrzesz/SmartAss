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
  }

  shuffle(array) {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * n--);
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }

  componentDidMount() {
    console.log(this.state.questionsToDisplay);
    this.state.reorderedQuestions = this.shuffle(this.state.questionsToDisplay);
    console.log(this.state.reorderedQuestions);
  }

  render() {
    return (
      <div> Loading... </div>
    )
  }
}