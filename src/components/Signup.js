import React, { Component } from 'react'

export class Signup extends Component {
  render() {
    return (
      <div>
        <form>
        <h1>Become A Member</h1>
        <div>
          <input type="text" name="name" placeholder="Enter your name" />
          <label htmlFor="name">Your Name</label>
        </div>
        <br></br>
        <div>
          <input type="text" name="username" placeholder="Create a username" />
          <label htmlFor="username">Username</label>
        </div>
        <br></br>
        <div>
          <input type="password" name="password" placeholder="Create a password" />
          <label htmlFor="password">Password</label>
        </div>
        <br></br>
        <div>
          <input type="password" name="confirmation" placeholder="Confirm your password" />
          <label htmlFor="password">Password Confirmation</label>
        </div>
        <input type="submit" value="Sign up" />
      </form>
        
      </div>
    )
  }
}

export default Signup
