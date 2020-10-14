import React, { useState, useEffect } from 'react'
import { Card, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import defaultProfilePic from '../../assets/svg/profile.svg';

// import { Card, CardMedia, Button, CardContent, Typography } from "@material-ui/core"


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const UserList = ({ users }) => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      infinite={true}
      keyBoardControl={true}
    >{console.log(users)}
      {users.map(user =>
        <div>
          <div style={{ width: '15rem' }}>
            {user.profile.profilePic
              ? (
              // <Link to={`/profile/${user.username}`}>
                <UserCard user={user} />
                
              // </Link>
              )
              : (<Card.Img variant='top' src={defaultProfilePic} />)}
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          </div>
          <div style={{ fontSize: '18px' }}>{user.profile.firstName} {user.profile.lastName}</div>
          <div>{user.profile.profession}</div>
        </div>
      )}
    </Carousel>)
}
export default UserList;

