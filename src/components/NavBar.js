import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';


export class NavBar extends Component {
  // state ={
  //   on: false
  // }

  // toggle = () =>{
  //   this.setState({on: !this.state.on})
  // }
  render() {
  return(
    <div className="main-menu">
      <Link to="/"> <div>logo</div> </Link>
      <Link to="/hikes"><div>Hikes</div></Link>
      <Link to="/members"><div>Members</div></Link>
      <Link to="/"><div>Log out</div></Link> 
      </div>

    )
  }
}

export default NavBar




