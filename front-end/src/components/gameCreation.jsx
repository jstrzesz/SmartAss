import React, { Component } from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import GamePage from './gamePage.jsx';
import request from 'request';
import triviaHelpers from '../../../server/trivia_api_helpers.js';
import axios from 'axios';


export default class GameCreation extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      categoryIsOpen: false,
      difficultyIsOpen: false,
      playersIsOpen: false,
      category: '',
      categoryId: null,
      difficulty: '',
      numberOfPlayers: 0,
      questions: [],
      difficultyBackgroundColor: ''
      // username: this.props.history.location.state.state
    }
    this.toggleOpenCategory = this.toggleOpenCategory.bind(this);
    this.toggleOpenDifficulty = this.toggleOpenDifficulty.bind(this);
    this.toggleOpenPlayers = this.toggleOpenPlayers.bind(this);
    this.categoryDropdownClick = this.categoryDropdownClick.bind(this);
    this.difficultyDropdownClick = this.difficultyDropdownClick.bind(this);
    this.playersDropdownClick = this.playersDropdownClick.bind(this);
    this.redirectToGamePage = this.redirectToGamePage.bind(this);
    this.handleSubmitGameParams = this.handleSubmitGameParams.bind(this);
    this.redirectToLogin = this.redirectToLogin.bind(this);
    // this.difficultyColor = this.difficultyColor.bind(this);
  }

  toggleOpenCategory () {
    this.setState({ categoryIsOpen: !this.state.categoryIsOpen })
  }

  toggleOpenDifficulty () {
    this.setState({ difficultyIsOpen: !this.state.difficultyIsOpen })
  }

  toggleOpenPlayers() {
    this.setState({ playersIsOpen: !this.state.playersIsOpen })
  }

  redirectToLogin() {
    if (this.state.username === '') {
      this.props.history.push('/login');
    }
  }

  categoryDropdownClick (e) {
    e.preventDefault();
    // console.log(e.target);
    this.setState({
      category: e.target.name,
      categoryId: e.target.id
    })
  }

  difficultyDropdownClick(e) {
    e.preventDefault();
    console.log(e.target)
    this.state.difficulty = e.target.value;
    // this.state.difficultyBackgroundColor = e.target.value;
    this.setState({
      difficulty: e.target.name,
      // difficultyBackgroundColor: e.target.value
    }, () => {})
    console.log(this.state);
  }

  // difficultyColor(e) {
  //   console.log(this.state.difficulty);
  //   if (e.target.name === 'easy') {
  //     console.log('line 74')
  //     this.difficultyBackgroundColor = '#0CC625';
  //   } else if (e.target.name === 'medium') {
  //     this.difficultyBackgroundColor = '#DECC21';
  //   } else if (e.target.name === 'hard') {
  //     this.difficultyBackgroundColor = '#C22009';
  //   } else {
  //     this.difficultyBackgroundColor = '';
  //   }
  // }

  playersDropdownClick(e) {
    e.preventDefault();
    console.log(e.target, 'playersNumber')
    this.setState({
      numberOfPlayers: e.target.name
    })
  }

  // redirectToGamePage() {
  //   this.props.history.push('/gamePage', {state: {questions: this.state.questions, username: this.state.username}})
  // }

  redirectToGamePage() {
    this.props.history.push('/loading', { state: { questions: this.state.questions} })
  }

  handleSubmitGameParams(event) {
    event.preventDefault();
    const gameParams = {
      categoryId: this.state.categoryId,
      difficulty: this.state.difficulty
    }
    console.log(gameParams)
    axios.post('/gameCreation', gameParams)
      .then(response => {
        this.state.questions = response.data;
        console.log(this.state.questions);
        console.log(response, 'axios post request from gameCreation page')
      }).catch(error => {
        console.error(error);
      })
  }
  
  render () {
    const categoryMenuClass = `dropdown-menu${this.state.categoryIsOpen ? " show" : ""}`;
    const difficultyMenuClass = `dropdown-menu${this.state.difficultyIsOpen ? " show" : ""}`;
    const playersMenuClass = `dropdown-menu${this.state.playersIsOpen ? " show" : ""}`;
    <GamePage info={this.state}/>
    return (
      <div className="container-fluid">
        <h1>Create Game</h1>
        <div className="row">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Players In Game</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th>Number of Players</th>
                  <th>Category Selection</th>
                  <th>Difficulty Selection</th>
                  <th>Player Selection</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {/* <td>{this.state.username}</td> */}
                  <td>Usernames</td>
                  <td>{this.state.category}</td>
                  <td style={{ background: this.state.difficultyBackgroundColor}}>{this.state.difficulty}</td>
                  <td>{this.state.numberOfPlayers}</td>
                  <td>
                    <div className="dropdown" onClick={this.toggleOpenCategory}>
                      <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true">Category</button>
                      <div className={categoryMenuClass} aria-labelledby="dropdownMenuButton">
                        {triviaHelpers.triviaHelpers.trivia_categories.map(category => {
                          return (<a  className="dropdown-item" 
                                      href="#" 
                                      name={category.name} 
                                      key={category.id}
                                      id={category.id}
                                      onClick={e => this.categoryDropdownClick(e)}
                                      >{category.name}</a>);
                        })}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown" onClick={this.toggleOpenDifficulty}>
                      <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true">Difficulty</button>
                      <div className={difficultyMenuClass} aria-labelledby="dropdownMenuButton">
                        {triviaHelpers.triviaHelpers.difficulty_levels.map(difficulty => {
                          return (<a  className="dropdown-item"
                                      href="#"
                                      name={difficulty.level}
                                      key={difficulty.id}
                                      // value={difficulty.level}
                                      onClick={e => this.difficultyDropdownClick(e)}
                                      >{difficulty.level}</a>);
                        })}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown" onClick={this.toggleOpenPlayers}>
                      <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true">Number of Players</button>
                      <div className={playersMenuClass} aria-labelledby="dropdownMenuButton">
                        {triviaHelpers.triviaHelpers.player_count.map(player => {
                          return (<a className="dropdown-item"
                            href="#"
                            name={player.number}
                            key={player.id}
                            onClick={e => this.playersDropdownClick(e)}>{player.number}</a>);
                        })}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <BrowserRouter>
              <div>
              <button type="button"
                      className="btn btn-success"
                      onClick={this.handleSubmitGameParams}>Submit Game Parameters</button>
              <Link to="/gamePage">
                  <button type="button" 
                          className="btn btn-success" 
                          onClick={this.redirectToGamePage}>Create Game</button> 
                </Link>
              </div>
            </BrowserRouter>
          </div>
        </div>
      </div>
    )
  }
}