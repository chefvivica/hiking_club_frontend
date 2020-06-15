import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'


export class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome To Hiking Club</h1>
        <Login/>
        <Signup/>
      </div>
    )
  }
}

export default WelcomePage
