import React, { Component } from 'react'
import HikesContainer from './HikesContainer'
import MembersContainer from './MembersContainer'


export class MainContainer extends Component {
  render() {
    return (
      <div>
        <HikesContainer/>
        <MembersContainer/>

      </div>
    )
  }
}

export default MainContainer
