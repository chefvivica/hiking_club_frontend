import React, { Component } from 'react'
const API = 'http://localhost:3000/hikes'
export class HikeProfile extends Component {
//   state = {
//     hike: null
// }

// componentDidMount() {
//     fetch(`${API}/${this.props.match.params.id}`)
//         .then(res => res.json())
//         .then(hike => this.setState({ hike }))
// }

  render(){
    console.log("profile!!!", this.props.hike)
    // if(!this.state.hike) return <div>loading</div>
    if(!this.props.hike) return <div>loading</div>
    // const {location,duration, img_url, start_at, description, distance,host, members} =this.state.hike
    const {location,duration, img_url, start_at, description, distance} = this.props.hike
    return(
    <div className="hike-Pro">
      <h3>{location}</h3>
      <img src={img_url}/> 
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
      <h5>Description: {description}</h5>
      {/* <h5>Host: {host.name}</h5> */}
    {/* <h5>Number of members: {this.state.hike.members.count}</h5> */}
    {/* {members.map(member=><h5 key={members.indexOf(member)}>{member.name}</h5>)} */}
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
