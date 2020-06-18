import React, { Component } from 'react'
import EditHikeForm from './EditHikeForm'

const API = 'http://localhost:3000/hikes'

export class HikeProfile extends Component {

  state = {
    showEditForm: false
  }

  handleClick = () => {
    this.setState(prevState => ({showEditForm: !prevState.showEditForm}))
  };

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
      <button onClick={this.handleClick}>
        {this.state.showEditForm ? "Hide Form" : "Edit Hike Details"}
      </button>
        {this.state.showEditForm ? 
          <EditHikeForm 
            {...this.props.hike}
            handleClick={this.handleClick}
            editHike={this.props.editHike}
          /> 
        : null}
      <hr></hr>
        <div>
          This Hike's Group: 
          <strong><p>{host.name} (Host)</p></strong>
          {members.map(member=>
          <strong key={members.indexOf(member)}><p>{member.name}</p></strong>)}
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
