import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import WelcomePage from '../components/WelcomePage'
import HikesContainer from './HikesContainer'
import MembersContainer from './MembersContainer'

// currently not being used...

export class MainContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          
        </div>
      </Router>
    )
  }
}

export default MainContainer
