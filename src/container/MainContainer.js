import React, { Component } from 'react'
import HikesContainer from './HikesContainer'
import MembersContainer from './MembersContainer'
import WelcomePage from '../components/WelcomePage'

export class MainContainer extends Component {
  render() {
    return (
      <div>
        <HikesContainer/>
        <MembersContainer/>
        <WelcomePage/>
      </div>
    )
  }
}

export default MainContainer
