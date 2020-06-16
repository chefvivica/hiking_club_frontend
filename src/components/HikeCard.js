import React from 'react';

const HikeCard = (props) => {

  const {location, start_at, distance, duration } = props
  
  const cardStyling = { 
    width: '400px', 
    background: 'red',
    
  }

  return(
    <div style={cardStyling}>
      <h3>{location}</h3>
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
    </div>
  )
}

export default HikeCard;