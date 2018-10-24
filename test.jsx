import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';


export default class GameCreation extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      questions: [],
      username: this.props.history.location.state.state
    }
    this.redirectToGamePage = this.redirectToGamePage.bind(this);
  }

  redirectToGamePage() {
    this.props.history.push('/gamePage', {state: {questions: this.state.questions, username: this.state.username}})
  }
  
  render () {
    return (
    <BrowserRouter>
      <Link to="/gamePage">
          <button type="button" 
                  className="btn btn-success" 
                  onClick={this.redirectToGamePage}>Create Game</button> 
        </Link>
    </BrowserRouter>
    )
  }
}