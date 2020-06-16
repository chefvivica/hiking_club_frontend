import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
// import { Router } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

// import MainContainer from './container/MainContainer';
import NavBar from './components/NavBar.js';
import WelcomePage from './components/WelcomePage.js';
import MembersContainer from './container/MembersContainer'
import HikesContainer from './container/HikesContainer'

class App extends Component {

  state = {
    hikes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/hikes')
    .then(resp => resp.json())
    .then(hikes => this.setState({ hikes }))
  };

  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={WelcomePage}/>
          <Route 
            exact path='/hikes' 
            render={routerProps => <HikesContainer 
              {...routerProps} 
              hikes={this.state.hikes}
            />}
          />
          <Route exact path='/members' component={MembersContainer}/>
          {/* <Route exact path='/' component={MainContainer} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
