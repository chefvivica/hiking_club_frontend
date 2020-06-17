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
    console.log(this.props.hikes)
    const { hikes, addHike, deleteHike } = this.props

    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.showForm ? "Hide From" : "Schedule a Hike"}
        </button>
        {this.state.showForm ? <NewHikeForm addHike={addHike}/> : null}
        <br></br>
        {hikes.map(hike=> 
          <HikeCard 
            {...hike} 
            key={hike.id} 
            deleteHike={deleteHike}
          />
        )}
      </div>
      
    )
  }
}

export default HikesContainer
