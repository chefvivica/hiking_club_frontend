import React, { Component } from 'react'
const API = 'http://localhost:3000/hikes'
export class HikeProfile extends Component {
  state = {
    hike: ''
}

componentDidMount() {
    fetch(`${API}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(hike => this.setState({ hike }))
}

  render(){
    const {location,duration, img_url, start_at, description, distance} =this.state.hike
    // console.log("profile!!!",this.state.hike.location, "see here!!",this.props)
    return(
    <div className="hike-Pro">
      <h3>{location}</h3>
      <img src={img_url}/> 
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
      <h5>Description: {description}</h5>
      <h5>Host: {description}</h5>
      <button>Join!</button>
      <br></br><br></br>
      <input type="text" placeholder="leave a comment"/>
      <input type="submit" value="submit"/>
      {/** we need to think about how to implement the comments */}
      
    </div>
    )
  }
 
}

export default HikeProfile
