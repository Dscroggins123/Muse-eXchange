import { set } from 'mongoose';
import React, { useState, useEffect, useReducer } from 'react';
// Bootstrap
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
// Icons
import EditIcon from '@material-ui/icons/Edit';
// API
import API from '../../utils/API';

const styles = {
  h2: {
    fontSize: '16px',
    fontWeight: 700
  }
}

const BasicInfo = ({ userId, submit, setSubmit, currentFirstName, currentLastName }) => {

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      firstName: '',
      lastName: '',
    }
  );

  const [editName, setEditName] = useState(false);

  // To handle profile info input 
  // useEffect(() => {
  
  // }, [])

  const handleChange = e => {
    console.log(e.target)
    const name = e.target.name;
    const newValue = e.target.value;
    console.log(newValue.length)
    setUserInput({[name]: newValue});
  }

  const toggleNameEdit = () => {
    console.log('Hello');
    setEditName(!editName);
  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      
      if(userInput.firstName.length !== 0 && userInput.lastName.length !== 0) {
        await API.updateProfile(userId, "firstName", userInput.firstName);
        await API.updateProfile(userId, "lastName", userInput.lastName);
      }
      // trigger useEffect()
      setSubmit((submit + 1));
    }
    setValidated(true);
  };

  return <>
    <h2 className='mt-2' style={styles.h2}>Channel name and description</h2>
    <p>Choose a channel name that represents you and your content.</p>
    <div className='user-name'>
      {!editName ? (
        <div>
          <h3>{`${currentFirstName} ${currentLastName}`} <EditIcon style={{display: 'inline-block', cursor: 'pointer'}} onClick={toggleNameEdit}/></h3>
        </div>
      ) : (
        <Form noValidate validated={validated} >
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
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
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
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Col>
        </Form.Row>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
        <Button variant='dark' className='ml-3' onClick={toggleNameEdit}>
          Cancel
        </Button>
      </Form>
      )}
    </div>
  </>
}

export default BasicInfo;