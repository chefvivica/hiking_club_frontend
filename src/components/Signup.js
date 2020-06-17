import React, { Component } from 'react'

const headers = { 
  'Content-Type': 'application/json', 
  Accept: 'application/json'
}

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

  handleSubmit = (e) => {
    e.preventDefault()
    const {name, username, password} = this.state
    
    if(this.state.password === this.state.confirmation){
      console.log(this.state)

      fetch('http://localhost:3000/members', {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json', 
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: name,
          username: username,
          password: password
        })
      })
        .then(resp => resp.json())
        .then(console.log)
    }
  }

  render() {

    const { name, username, password, confirmation } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
