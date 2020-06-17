import React, { Component } from 'react'
import HikeCard from '../components/HikeCard'


export class HikesContainer extends Component {

  render() {
    const { hikes } = this.props

    return (
      <div>
        {hikes.map(hike=> <HikeCard {...hike} key={hike.id}/>)}
      </div>
      
    )
  }
}

export default HikesContainer
