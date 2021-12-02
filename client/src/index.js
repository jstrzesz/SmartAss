import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       triviaHelpers: triviaHelpers
//     }
//   }

//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navigation />
//           <Switch >
//             <Route exact={true} path="/" render={props => <Home {...props} />}/>
//             <Route path="/sign_up" render={props => <SignUp {...props} />}/>
//             <Route path="/gameCreation" render={props => <GameCreation {...props} />}/>
//             <Route path="/gamePage" render={props => <GamePage {...props} />}/>
//             <Route path="/gameOver" render={props => <GameOver {...props} />} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'));