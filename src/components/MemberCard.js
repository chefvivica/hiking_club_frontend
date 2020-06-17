import React from 'react'

const MemberCard = (props) => {

  const { name, username, img_url } = props

  return (
    <div className="members">
      <img src={img_url} alt={name}></img>
      <h3>{name}</h3>
      <h5>user name: {username}</h5>
    </div>
  )

};

export default MemberCard;