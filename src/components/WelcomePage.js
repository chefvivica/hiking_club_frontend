import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'


export class WelcomePage extends Component {
  render() {

    const { addMember } = this.props

    return (
      <div>
        <h1>Welcome To Hiking Club</h1>
        <Login/>
        <Signup addMember={addMember}/>
      </div>
    )
  }
}

export default WelcomePage
