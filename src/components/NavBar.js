import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';


export class NavBar extends Component {
  
  render() {

  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
  }
  return(
    // <div className="main-menu">
    //   <Link to="/"> <div>logo</div> </Link>
    //   <Link to="/hikes"><div>Hikes</div></Link>
    //   <Link to="/members"><div>Members</div></Link>
    //   <Link to="/"><div>Log out</div></Link> 
    //   </div>
            <div className="main-menu">
            <NavLink to="/" exact style={link} activeStyle={{background: "blue"}}>🦚</NavLink>
            <NavLink to="/hikes" exact style={link} activeStyle={{background: "blue"}}>Hikes</NavLink>
            <NavLink to="/members" exact style={link} activeStyle={{background: "blue"}}>Members</NavLink>
            <NavLink to="/" exact style={link} activeStyle={{background: "green"}}>Log out</NavLink>
            </div>
    )
  }
}

export default NavBar




