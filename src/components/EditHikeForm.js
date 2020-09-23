import React from 'react'

const headers = { 
  'Content-Type': 'application/json', 
  Accept: 'application/json'
}

export default class EditHikeForm extends React.Component {

  state = {
    location: this.props.location, 
    distance: this.props.distance, 
    duration: this.props.duration, 
    start_at: this.props.start_at, 
    host_id: this.props.host_id, 
    description: this.props.description
  }

  handleChange = (e) => {
    console.log(this.state.start_at)
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()  
    
    fetch(`http://fast-forest-75910.herokuapp.com/hikes/${this.props.id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        location: this.state.location,
        description: this.state.description,
        distance: this.state.distance,
        duration: this.state.duration,
        start_at: this.state.start_at,
        host_id: this.state.host_id
      })
    })
      .then(resp => resp.json())
      .then(hike => this.props.editHike(hike, hike.id))
    this.props.handleClick()
  }

  render(){
    console.log(this.state.start_at)
    const {
      location, 
      distance, 
      duration, 
      start_at, 
      host_id, 
      description
    } = this.state

    return( 

      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="location">Location: </label>
            <input 
              type="text" 
              name="location" 
              value={location} 
              placeholder="Enter hike location" 
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="description">Details: </label>
            <textarea 
              type="text" 
              name="description" 
              value={description} 
              placeholder="Enter hike details"
              onChange={this.handleChange} 
            >
            </textarea>
          </div>
          <br></br>
          <div>
            <label htmlFor="distance">Est. Distance - miles:</label>
            <input 
              type="number" 
              name="distance" 
              value={distance} 
              placeholder="Enter distance"
              onChange={this.handleChange} 
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="duration">Est. Duration - hrs: </label>
            <input 
              type="number" 
              name="duration"
              value={duration} 
              placeholder="Enter distance"
              onChange={this.handleChange} 
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="start_at">When: </label>
            <input 
              type="datetime-local" 
              name="start_at" 
              value={(start_at || '').toString().substring(0, 16)}
              placeholder="Date/Time of Hike" 
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="host_id">Member #: </label>
            <input 
              type="number" 
              name="host_id" 
              value={host_id}
              placeholder="Enter member to assign host" 
              onChange={this.handleChange}
            />
          </div>
          <br></br>
          <input type="submit" value="Update Hike" />
        </form>
      </div>

    )
  }
};