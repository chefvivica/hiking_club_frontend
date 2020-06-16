import React from 'react';

const HikeCard = (props) => {

  const {location, start_at, distance, duration } = props
  
  return(
    <div  className="all-hikes">
      <h3>{location}</h3>
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
    </div> 
  )
}

export default HikeCard;