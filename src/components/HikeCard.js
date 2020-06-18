import React from 'react';
import { useHistory } from "react-router-dom";
import HikeProfile from './HikeProfile';

const HikeCard = (props) => {
  let history = useHistory();
  const { location, start_at, distance, duration, id } = props
  if(!props.host) return <div>loading...</div>
  const {name} = props.host


  const handleClick = () => {
    console.log(id)
    fetch(`http://localhost:3000/hikes/${id}`, {
      method: "DELETE",
      headers: { 
        'Content-Type': 'application/json'
      }
    })
      .then(props.deleteHike(id))
  }

  return(
    <div  className="all-hikes">
      <h3>{location}</h3>
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
      <p>Host: {props.host.name}</p>     
      <button onClick={() => history.push(`/hikes/${id}`)}>Hike Info</button>
      <br></br>
      <button onClick={handleClick}>Cancel Hike</button>
    </div> 

  )
}

export default HikeCard;