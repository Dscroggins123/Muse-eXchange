import React from 'react';
import { Image } from 'react-bootstrap';
import "./style.css";
import defaultProfilePic from '../../assets/svg/profile.svg';

const styles ={ 
  profilePic: {
    boxShadow:'0 14px 28px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15)',
  }
}
const ProfilePic = ({profilePic}) => {
  return (<>
    <Image fluid className='mb-4 border border-light' style={styles.profilePic}
      src={profilePic || "defaultProfilePic"}
    />
  </>)
}

export default ProfilePic;
