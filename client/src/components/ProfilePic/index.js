import React from 'react';
import { Image } from 'react-bootstrap';
import "./style.css";
const picture = {
  paddingTop:"7%"
}
const ProfilePic = ({profilePic}) => {
  return (<>
    <Image fluid style={picture}
      className="image-container" 
      src={profilePic || "https://via.placeholder.com/350"} 
      style={{marginTop: "80px"}}
    />
  </>)
}

export default ProfilePic;
