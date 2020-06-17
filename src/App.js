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
import HikeProfile from './components/HikeProfile';

class App extends Component {

  state = {
    hikes: [],
    members: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/hikes')
      .then(resp => resp.json())
      .then(hikes => this.setState({ hikes }))
    fetch('http://localhost:3000/members')
      .then(resp => resp.json())
      .then(members => this.setState({ members }))
  };
  
  render(){
    // console.log(this.state)
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/hikes/:id' component={HikeProfile} />
          <Route 
            exact path='/hikes' 
            render={routerProps => 
              <HikesContainer 
                {...routerProps} 
                hikes={this.state.hikes}
              />
            }
          />
          <Route 
            exact path='/members' 
            render={routerProps => 
              <MembersContainer
                {...routerProps} 
                members={this.state.members}
              />
            }
          />
          <Route exact path='/' component={WelcomePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
