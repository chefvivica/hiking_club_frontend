import React, { Component } from 'react'

export class Signup extends Component {
 
  state = {
    name: '',
    username: '',
    password: '',
    confirmation: ''  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {

    const { name, username, password, confirmation } = this.state

    return (
      <div>
        <form>
        <h1>Become A Member</h1>
        <div>
          <label htmlFor="name">Your Name: </label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            placeholder="Enter your name" 
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="username">Username: </label>
          <input 
            type="text" 
            name="username" 
            value={username} 
            placeholder="Create username"
            onChange={this.handleChange} 
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password: </label>
          <input 
            type="password" 
            name="password"
            value={password} 
            placeholder="Create password"
            onChange={this.handleChange} 
          />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Confirm Password: </label>
          <input 
            type="password" 
            name="confirmation" 
            value={confirmation}
            placeholder="Confirm your password" 
            onChange={this.handleChange}
          />
        </div>
        <br></br>
        <input type="submit" value="Sign up" />
      </form>
        
      </div>
    )
  }
}

export default Signup
