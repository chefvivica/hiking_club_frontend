import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'


export class WelcomePage extends Component {
  state ={
    showLogin: true
  }

  toggle = () => this.setState({showLogin: !this.state.showLogin})


  render() {

    const { addMember } = this.props
    return (
      <div>
        <h1>Welcome To Hiking Club</h1>
        <button onClick={this.toggle}>{this.state.showLogin? "Not a member yet? Join now!": "Already a member? Login now!"}</button>
        {this.state.showLogin? <Login/> : <Signup addMember={addMember}/> }
        {/* <Login/>
        <Signup addMember={addMember}/> */}
      </div>
    )
  }
}

export default WelcomePage
