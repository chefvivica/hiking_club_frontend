import React, { Component } from 'react'
import HikeCard from '../components/HikeCard'
import NewHikeForm from '../components/NewHikeForm'


export class HikesContainer extends Component {

  state = {
    showForm: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return {showForm: !prevState.showForm}
    })
  };

  render() {
    const { hikes, addHike } = this.props

    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.showForm ? "Hide From" : "Schedule a Hike"}
        </button>
        {this.state.showForm ? <NewHikeForm addHike={addHike}/> : null}
        <br></br>
        {hikes.map(hike=> <HikeCard {...hike} key={hike.id}/>)}
      </div>
      
    )
  }
}

export default HikesContainer
