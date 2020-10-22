import React, {useState, useEffect} from 'react';
// Bootstrap
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
// Components
import TutorialsList from './TutorialsList';
// SVGs
import defaultProfilePic from '../../assets/svg/profile.svg';
// Api
import API from '../../utils/API';

const Tutorials = ({userId, submit, setSubmit}) => {
  return <>
    <Container fluid className='mt4 mb-4'>
      <div className='tutorials-list mt-2'>
        <TutorialsList userId={userId} field='tutorial' submit={submit} setSubmit={setSubmit}/>
      </div>
    </Container>
  </>
}

export default Tutorials;