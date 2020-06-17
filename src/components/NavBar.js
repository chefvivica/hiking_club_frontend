import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {NavDropdown, Navbar, Nav} from 'react-bootstrap';


export class NavBar extends Component {
  
  render() {

  const link = {
    position: "center",
    width: '200px',
    padding: '10px',
    margin: '80px',
    background: 'black',
    textDecoration: 'none',
    color: 'white',
  }

  return(
    <div className="main-menu">
      <br></br><br></br>
    <NavLink to="/" exact style={link} activeStyle={{background: "blue"}}>Home</NavLink>
    <NavLink to="/hikes" exact style={link} activeStyle={{background: "blue"}}>Hikes</NavLink>
    <NavLink to="/members" exact style={link} activeStyle={{background: "blue"}}>Members</NavLink>
    <NavLink to="/" exact style={link} activeStyle={{background: "green"}}>Log out</NavLink>
    <input placeholder="🔍Search by location ..."/>
    </div>

    )
  }
}

export default NavBar




