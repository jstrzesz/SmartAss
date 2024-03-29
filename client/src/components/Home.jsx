import React, { useState, useEffect } from 'react';
// import { Card } from '@mui/material-ui';
import LeaderBoard from './LeaderBoard.jsx';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import SignUp from './sign_up.jsx';
import GameCreation from './gameCreation.jsx';
import Users from './userDisplay.jsx';

const Home = () =>  {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //     username: ''
  //   }
  //   this.redirectToSignUp = this.redirectToSignUp.bind(this);
  //   this.redirectToGameCreation = this.redirectToGameCreation.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // redirectToSignUp () {
  //   this.props.history.push('/sign_up')
  // }

  // handleChange(event) {
  //   this.setState({ [event.target.name]: event.target.value })
  //   console.log(this.state);
  // }

  // redirectToGameCreation() {
  //   this.props.history.push('/gameCreation', {state: {users: this.state.users, username: this.state.username}})
  // }

  // componentDidMount() {
  //   axios.get('/users')
  //     .then(res => {
  //       this.setState({ users: res.data })
  //     }).catch(err => {
  //       console.error(err)
  //     })
  // }

  // logIn() {
  //   this.setState({username: ''})
  // }

  // render () {
    return (
      <div className="container">
        {/* <Card variant="outlined"> */}
          <h1>Smart-Ass™</h1>
          <h4>A Trivia Game</h4>
          <h6>© 2018-2021</h6>

        {/* </Card> */}
        <Link to="create">Create Game</Link>
        <LeaderBoard />
        {/* <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <h3>Leader Board</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Rank</th>
                      <th>Wins</th>
                      <th>Losses</th>
                    </tr>
                  </thead> */}
                  {/* <tbody>
                    {this.state.users.map((user, index) => {
                      return (<Users key={index} user={user}/>)
                    })}
                  </tbody> */}
                {/* </table>
                <div> */}
                  {/* <BrowserRouter>
                    <Link to="/gameCreation">
                      <button type="submit" 
                              className="btn btn-primary" 
                              onClick={this.redirectToGameCreation}>Create Game</button>
                    </Link>
                  </BrowserRouter> */}
                {/* </div> */}
              {/* </div> */}

              {/* <div className="col-md-4">
                <h3>Log In</h3>
                <form role="form">
                  <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" id="UsernameInput" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="EmailInput" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="PasswordInput" />
                  </div>
                  <button type="submit" 
                          className="btn btn-primary"
                          onClick={this.redirectToGameCreation}>Log In</button>
                </form>
                <h4>New Players</h4>
                <h5>Not a player? Sign Up Here </h5> */}
                {/* <BrowserRouter>
                  <Link to="/sign_up">
                    <button type="submit" 
                            className="btn btn-primary" 
                            onClick={this.redirectToSignUp}>Sign Up</button>
                  </Link>
                </BrowserRouter> */}
              {/* </div>
            </div>
          </div> */}
        </div>
      // </div>
    )
  }
// }

export default Home;
