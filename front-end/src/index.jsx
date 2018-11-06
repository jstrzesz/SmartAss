import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/home.jsx';
import SignUp from './components/sign_up.jsx';
import GameOver from './components/gameOver.jsx';
import GamePage from './components/gamePage.jsx';
import GameCreation from './components/gameCreation.jsx';
import Navigation from './components/navigation.jsx';
import triviaHelpers from '../../server/trivia_api_helpers.js'
import Error from './components/error.jsx';
import Splash from './splash.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      triviaHelpers: triviaHelpers
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch >
            <Route exact={true} path="/" render={props => <Splash {...props} />}/>
            <Route path="/home" render={props => <Home {...props} />} />
            <Route path="/sign_up" render={props => <SignUp {...props} />}/>
            <Route path="/gameCreation" render={props => <GameCreation {...props} />}/>
            <Route path="/gamePage" render={props => <GamePage {...props} />}/>
            <Route path="/gameOver" render={props => <GameOver {...props} />} />
            <Route component={ Error } />
          </Switch>
        </div>
       </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));