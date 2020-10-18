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
    currentAbout,
    currentInstruments,
    currentLinks
  }
) => {

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: '',
      lastName: '',
      about: '',
      guitar: '',
      drums: '', 
      bass: '',
      keyboard: '',
      beats: '',
      trumpet: '',
      saxophone: '',
      violin: '',
      cello: '',
      linkedin: '',
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
    }
  );

  const [editName, setEditName] = useState(false);

  // //To handle profile info input 
  // useEffect(() => {
  //   userInput.guitar = currentInstruments.guitar;
  //   userInput.drums = currentInstruments.drums;
  //   userInput.guitar = currentInstruments.guitar;
  //   userInput.guitar = currentInstruments.guitar;
  //   userInput.guitar = currentInstruments.guitar;
  //   userInput.guitar = currentInstruments.guitar;
  // }, [])

  const handleChange = e => {
    const name = e.target.name;
    const newValue = e.target.value;
    setUserInput({ [name]: newValue });
  }

  const handleCheckBoxChange = e => {
    console.log(e.target)
    const name = e.target.name;
    const newValue = e.target.checked;
    console.log('handleCheckedChange')
    console.log(name)
    console.log(newValue)
    setUserInput({ [name]: newValue})
  }

  const toggleNameEdit = () => {
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

    // Update about
    if (userInput.about) await API.updateProfile(userId, "about", userInput.about);
    // Update instruments
    if (userInput.guitar === true || userInput.guitar === false) await API.updateInstruments(userId, "guitar", userInput.guitar);
    if (userInput.drums === true || userInput.drums === false) await API.updateInstruments(userId, "drums", userInput.drums);
    if (userInput.bass === true || userInput.bass === false) await API.updateInstruments(userId, "bass", userInput.bass);
    if (userInput.keyboard === true || userInput.keyboard === false) await API.updateInstruments(userId, "keyboard", userInput.keyboard);
    if (userInput.beats === true || userInput.beats === false) await API.updateInstruments(userId, "beats", userInput.beats);
    if (userInput.trumpet === true || userInput.trumpet === false) await API.updateInstruments(userId, "trumpet", userInput.trumpet);
    if (userInput.saxophone === true || userInput.saxophone === false) await API.updateInstruments(userId, "saxophone", userInput.saxophone);
    if (userInput.violin === true || userInput.violin === false) await API.updateInstruments(userId, "violin", userInput.violin);
    if (userInput.cello === true || userInput.cello === false) await API.updateInstruments(userId, "cello", userInput.cello);
    // Update Links
    if (userInput.linkedin) await API.updateLinks(userId, "linkedin", userInput.linkedin);
    if (userInput.facebook) await API.updateLinks(userId, "facebook", userInput.facebook);
    if (userInput.instagram) await API.updateLinks(userId, "instagram", userInput.instagram);
    if (userInput.twitter) await API.updateLinks(userId, "twitter", userInput.twitter);
    if (userInput.youtube) await API.updateLinks(userId, "youtube", userInput.youtube);
  };

  return <Container fluid>
    {/* <p>Choose a channel name that represents you and your content.</p> */}
    {/* {console.log(currentInstruments)}
    {console.log(currentLinks)} */}
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
          defaultValue={currentAbout} 
          rows="8" 
          type="text"
          name="about"
          onChange={handleChange}
          style={{textAlign: 'left'}} 
        />
        {/** Instruments */}
        <Form.Label style={styles.h3}>Instruments:</Form.Label>
        <div key='inline-checkbox' className="mb-3">
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.guitar} 
            label="Guitar"  type='checkbox' id={`inline-checkbox-1`} name="guitar" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.drums}
            label="Drums" type='checkbox' id={`inline-checkbox-2`} name="drums" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.bass}
            label="Bass" type='checkbox' id={`inline-checkbox-3`} name="bass" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.keyboard}
            label="Keyboard" type='checkbox' id={`inline-checkbox-4`} name="keyboard" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.beats}
            label="Beats" type='checkbox' id={`inline-checkbox-5`} name="beats" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.trumpet}
            label="Trumpet" type='checkbox' id={`inline-checkbox-6`} name="trumpet" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.saxophone}
            label="Saxophone" type='checkbox' id={`inline-checkbox-7`} name="saxophone" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.violin}
            label="Violin" type='checkbox' id={`inline-checkbox-8`} name="violin" onClick={handleCheckBoxChange} />
          <Form.Check style={{textAlign: 'left'}} inline defaultChecked={currentInstruments.cello}
            label="Cello" type='checkbox' id={`inline-checkbox-9`} name="cello" onClick={handleCheckBoxChange} />
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
            <Form.Control style={{textAlign: 'left'}} defaultValue={currentLinks.linkedin} type="text" placeholder="LinkedIn url" 
              name='linkedin' onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="facebookUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              Facebook
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} defaultValue={currentLinks.facebook} type="text" placeholder="Facebook url" 
              name='facebook' onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="instagramUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              Instagram
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} defaultValue={currentLinks.instagram} type="text" placeholder="Instagram url" 
              name='instagram' onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="twitterUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              Twitter
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} defaultValue={currentLinks.twitter} type="text" placeholder="Twitter url" 
              name='twitter' onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="youtubeUrl">
          <Form.Label column sm={2} className='d-flex justify-content-center pl-0 pr-0'>
            <div className='align-self-center'>
              YouTube
              </div>
          </Form.Label>
          <Col sm={6}>
            <Form.Control style={{textAlign: 'left'}} defaultValue={currentLinks.youtube} type="text" placeholder="YouTube url" 
              name='youtube' onChange={handleChange}
            />
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