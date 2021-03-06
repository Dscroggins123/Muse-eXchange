import React, { useState, useEffect } from 'react';
// Bootstrap
import { Container, Image, Nav } from 'react-bootstrap';
// SVGs
import defaultProfilePic from '../../assets/svg/profile.svg';

const SideBar = ({ profilePic, firstName, lastName }) => {

  const [currentPic, setCurrentPic] = useState();

  useEffect(() => {
    if (profilePic) {
      setCurrentPic(profilePic);
    } else {
      setCurrentPic(defaultProfilePic)
    }
  })

  return <>
    <Container fluid style={{ fontFamily: 'Kumbh Sans, sans-serif' }}>
      <div className='d-flex justify-content-center p-2 mt-4'>
        <Image className='border border-light' src={currentPic} style={{ width: "75%" }} />
      </div>
      <div className='text-center'>
        <h3 style={{ fontSize: '20px' }}>Account</h3>
        <h4 className='text-secondary' style={{ fontSize: '16px' }}>{`${firstName} ${lastName}`}</h4>
      </div>
      <Container fluid>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="songs">Songs</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="tutorials">Tutorials</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Container>
  </>
}

export default SideBar;