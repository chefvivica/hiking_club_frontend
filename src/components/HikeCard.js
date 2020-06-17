import React from 'react';
import { useHistory } from "react-router-dom";
import HikeProfile from './HikeProfile';

const HikeCard = (props) => {

  const {location, start_at, distance, duration,id } = props
  const {username} = props.host
  let history = useHistory();
  // console.log("card!!!", history)

  return(
    <div  className="all-hikes">
      <h3>{location}</h3>
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
      <p>Host: {username}</p>     
      <button onClick={() => history.push(`/hikes/${id}`)}>Visit this hike !</button>
    
    </div> 

  )
}

export default HikeCard;