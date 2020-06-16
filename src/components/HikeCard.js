import React from 'react';

const HikeCard = (props) => {

  const {location, start_at, distance, duration } = props
  const {name} = props.host
  console.log(props)
  return(
    <div  className="all-hikes">
      <h3>{location}</h3>
      <h5>Date: {start_at}</h5>
      <h5>Est. Distance: {distance} miles</h5>
      <h5>Est. Duration: {duration} hours</h5>
  <p>Host: {name}</p>
    </div> 
  )
}

export default HikeCard;