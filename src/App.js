import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import MainContainer from './container/MainContainer';
import WelcomePage from './components/WelcomePage'
import {BrowserRouter as Router, Route} from 'react-router-dom'   

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={WelcomePage}/>
      </div>
    </Router>
  );
}

export default App;
