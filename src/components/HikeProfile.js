import React, { Component } from 'react'
const API = 'http://localhost:3000/hikes'
export class HikeProfile extends Component {


  render(){
    if(!this.props.hike) return <div>loading</div>
    const {location,duration, img_url, start_at, description, distance, host, members} = this.props.hike
    return(
    <div className="hike-Pro">
      <h3>{location}</h3>
      <img src={img_url}/> 
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
      <h5 className="description">Description: {description}</h5>

      <hr></hr>
        <div>
          This Hike's Group: 
          <strong><p>{host.name} (Host)</p></strong>
          {members.map(member=>
          <strong><p key={members.indexOf(member)}>{member.name}</p></strong>)}
        </div>
      <button>Join!</button>
      <br></br><br></br>
      <input type="text" placeholder="leave a comment"/>
      <input type="submit" value="submit"/>
      
    </div>
    )
  }
 
}

export default HikeProfile
