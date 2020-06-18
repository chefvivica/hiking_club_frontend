import React from 'react'

const initState = {location: '', distance: '', duration: '', start_at: '', host_id: '', description: ''}

const headers = { 
  'Content-Type': 'application/json', 
  Accept: 'application/json'
}

export default class NewHikeForm extends React.Component {

  state = initState

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault()  
    
    fetch('http://localhost:3000/hikes', {
      method: "POST",
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
      .then(data => this.props.addHike(data))
    this.setState(initState)
  }

  render(){
    // console.log(this.state)

    const {location, distance, duration, start_at, host_id, description} = this.state

    return( 

      <div>
        <form className="new-hike-form" onSubmit={this.handleSubmit}>
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
              value={start_at}
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
          <input type="submit" value="Create Hike" />
        </form>
      </div>

    )
  }
};