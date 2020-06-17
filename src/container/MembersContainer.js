import React, { Component } from 'react'
import MemberCard from '../components/MemberCard'

export class MembersContainer extends Component {
  render() {

    const { members } = this.props

    return (
      <div>
        <h1>Members</h1>
        {members.map(member => 
          <MemberCard 
            key={member.id} 
            {...member}
          />
        )}
      </div>
    )
  }
}

export default MembersContainer
