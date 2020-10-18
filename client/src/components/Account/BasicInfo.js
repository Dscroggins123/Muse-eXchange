import { set } from 'mongoose';
import React, { useState, useEffect, useReducer } from 'react';
// Bootstrap
import { Container, Row, Col, Image, Button, Form, Jumbotron } from 'react-bootstrap';
// Icons
import EditIcon from '@material-ui/icons/Edit';
// Components
import ProfilePicModal from './ProfilePicModal';
// SVGs
import defaultProfilePic from '../../assets/svg/profile.svg';
// API
import API from '../../utils/API';

const styles = {
  h2: {
    fontSize: '20px',
    fontWeight: 700
  },
  h3: {
    fontSize: '16px',
    fontWeight: 600
  }
}

const BasicInfo = (
  { userId,
    submit, 
    setSubmit, 
    currentFirstName, 
    currentLastName, 
    profilePic ,
    about,
  }
) => {

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      about: '',
    }
  );

  const [editName, setEditName] = useState(false);

  // To handle profile info input 
  // useEffect(() => {
  // }, [userInput.firstName, userInput.lastName])

  const handleChange = e => {
    console.log(e.target)
    const name = e.target.name;
    const newValue = e.target.value;
    console.log(newValue.length)
    console.log(newValue)
    setUserInput({ [name]: newValue });
  }

  const toggleNameEdit = () => {
    console.log('Hello');
    setEditName(!editName);
  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {

    // Update first and last name
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      if (userInput.firstName.length !== 0 && userInput.lastName.length !== 0 && editName) {
        await API.updateProfile(userId, "firstName", userInput.firstName);
        await API.updateProfile(userId, "lastName", userInput.lastName);
        // trigger useEffect()
        setSubmit((submit + 1));
        setEditName(false);
        setUserInput({firstName: '', lastName: ''})
      }
    }
    setValidated(true);

    // Update basic info
    console.log(userInput.about)
    await API.updateProfile(userId, "about", userInput.about);
  };

  return <Container fluid>
    {/* <p>Choose a channel name that represents you and your content.</p> */}

    <div className='edit-profile-name'>
      <h3 style={styles.h3}>Profile name:</h3>
      {!editName ? (
        <div>
          <h3>{`${currentFirstName} ${currentLastName}`} <EditIcon style={{ display: 'inline-block', cursor: 'pointer' }} onClick={toggleNameEdit} /></h3>
        </div>
      ) : (
          <Form noValidate validated={validated} className='mb-3'>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>First name (required)</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter first name (required)"
                  // defaultValue={currentFirstName}
                  type='text'
                  name='firstName'
                  onChange={handleChange}
                  style={{textAlign: 'left'}}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a first name.
              </Form.Control.Feedback>
              </Form.Group>
              <Col>
                <Form.Label>Last name (required)</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter last name (required)"
                  // defaultValue={currentLastName}
                  type='text'
                  name="lastName"
                  onChange={handleChange}
                  style={{textAlign: 'left'}}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a last name.
              </Form.Control.Feedback>
              </Col>
            </Form.Row>
            <Button variant="primary" onClick={handleSubmit}>
              Change name
        </Button>
            <Button variant='dark' className='ml-3' onClick={toggleNameEdit}>
              Cancel
        </Button>
          </Form>
        )}
    </div>

    <div className='edit-profile-picture mt-2 mb-3'>
      <h3 style={styles.h3}>Profile picture:</h3>
      {profilePic ? (<Image src={profilePic} style={{ width: '200px' }} />)
        : (<Image src={defaultProfilePic} style={{ width: '200px' }} />)
      }
      <ProfilePicModal userId={userId} submit={submit} setSubmit={setSubmit} />
    </div>

    <Form className='mb-3'>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        {/** Bio */}
        <Form.Label className='text-center' style={styles.h3}>About:</Form.Label>
        <Form.Control 
          as="textarea" 
          defaultValue={about} 
          rows="8" 
          type="text"
          name="about"
          onChange={handleChange}
          style={{textAlign: 'left'}} 
        />
        {/** Instruments */}
        <Form.Label style={styles.h3}>Instruments:</Form.Label>
        <div key='inline-checkbox' className="mb-3">
          <Form.Check style={{textAlign: 'left'}} custom inline label="Guitar" type='checkbox' id={`inline-checkbox-1`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Drums" type='checkbox' id={`inline-checkbox-2`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Bass" type='checkbox' id={`inline-checkbox-3`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Keyboard" type='checkbox' id={`inline-checkbox-4`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Beats" type='checkbox' id={`inline-checkbox-5`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Trumpet" type='checkbox' id={`inline-checkbox-6`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Saxophone" type='checkbox' id={`inline-checkbox-7`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Violin" type='checkbox' id={`inline-checkbox-8`} />
          <Form.Check style={{textAlign: 'left'}} inline label="Cello" type='checkbox' id={`inline-checkbox-9`} />
          {/* <Form.Check inline label="Other" type='checkbox' id={`inline-checkbox-10`} /> */}
        </div>
        <h3 style={styles.h3}>Links:</h3>
        <Form.Group as={Row} controlId="linkedInUrl">
          <Form.Label  column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              LinkedIn
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} type="text" classNam='text-left' placeholder="LinkedIn url" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="facebookUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              Facebook
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} type="text" placeholder="Facebook url" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="instagramUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              Instagram
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} type="text" placeholder="Instagram url" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="twitterUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              Twitter
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} type="text" placeholder="Twitter url" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="youtubeUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              YouTube
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} type="text" placeholder="YouTube url" />
          </Col>
        </Form.Group>

      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Save Changes
      </Button>
    </Form>
  </Container>
}

export default BasicInfo;