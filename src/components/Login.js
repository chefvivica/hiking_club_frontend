import React, { Component } from 'react'
 
class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    const {username, password} = this.state
    console.log("login🌳🦚🐓", this.state)
    return (
      <form>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            value={username} 
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login
