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
      <div className="welcome-page"> 
        <h1>
          Keyboard Jockey Hiking and Adventure Society
        </h1>
        {this.state.showLogin? <Login match={this.props} findUser={this.props.findUser}/> : <Signup addMember={addMember}/> }
        <br></br><br></br><br></br>
        <button onClick={this.toggle}>{this.state.showLogin? "Not a member yet? Join now!": "Already a member? Login now!"}</button>
      </div>
    )
  }
}

export default WelcomePage
