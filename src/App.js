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
import Signup from './components/Signup';
import Login from './components/Login';
class App extends Component {

  state = {
    hikes: [],
    members: [],
    currentUsername:''
  }

  componentDidMount(){
    fetch('http://localhost:3000/hikes')
      .then(resp => resp.json())
      .then(hikes => this.setState({ hikes }))
    fetch('http://localhost:3000/members')
      .then(resp => resp.json())
      .then(members => this.setState({ members }))
  };

  addMember = (memberObj) => {
    this.setState({members: [...this.state.members, memberObj]})
  };

  addHike = (hikeObj) => {
    console.log(hikeObj)
    this.setState({hikes: [...this.state.hikes, hikeObj]})
  };

  editHike = (hike, hikeId) => {  
    const targetHike = this.state.hikes.find(hike => hike.id === hikeId)
    const hikeIndex = this.state.hikes.indexOf(targetHike)
    console.log(hikeIndex)
    let updatedHikes = [...this.state.hikes]
    updatedHikes.splice(hikeIndex, 1, hike)
    this.setState({hikes: updatedHikes})
  }

  deleteHike = (hikeId) => {
    const targetHike = this.state.hikes.find(hike => hike.id === hikeId)
    const hikeIndex = this.state.hikes.indexOf(targetHike)
    let updatedHikes = [...this.state.hikes]
    updatedHikes.splice(hikeIndex, 1)
    this.setState({hikes: updatedHikes})
  };

  findUser = (e, username,match) => {
    e.preventDefault()
    if(this.state.members.find(member=> member.username===username)){
      this.setState({currentUsername: username})
      match.history.push("/hikes")
    }else{
      alert("Try again!")
    }
  }
  
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          {/* <Route exact path='/hikes/:id' component={HikeProfile} /> */}
          <Route exact path='/hikes/:id' render={routerProps =>{
            const hikeId = parseInt(routerProps.match.url.split("/")[2])
            const targetHike = this.state.hikes.find(hike=> hike.id === hikeId)
            return <HikeProfile 
              hike={targetHike} 
              hikeId={hikeId} 
              hikeId={parseInt(routerProps.match.url.split("/")[2])}
              editHike={this.editHike}
            /> 
          }}/>
          <Route 
            exact path='/hikes' 
            render={routerProps => 
              <HikesContainer 
                {...routerProps} 
                hikes={this.state.hikes}
                addHike={this.addHike}
                deleteHike={this.deleteHike}
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
          <Route 
            exact path='/' 
            render={routerProps => 
              <WelcomePage
                {...routerProps}
                addMember={this.addMember} 
                findUser={this.findUser}
              />
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
