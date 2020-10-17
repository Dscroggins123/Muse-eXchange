import React, { useState, useEffect } from 'react';
// Bootstrap
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
// API
import API from '../../utils/API';

const styles = {
  h2: {
    fontSize: '16px',
    fontWeight: 700
  }
}

const BasicInfo = ({userId, submit, setSubmit, currentFirstName, currentLastName}) => {

  const [defaultFirstName, setDefaultFirstName] = useState('');
  const [defaultLastName, setDefaultLastName] = useState('');
  // To handle profile info input 
  const [infoInput, setInfoInput] = useState('');

  useEffect(() => {
    setDefaultFirstName(currentFirstName);
    setDefaultLastName(currentLastName)
  })

  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setInfoInput({ ...value, [name]: value })

    console.log(infoInput)
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    console.log(form)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      console.log('attempt to change name')
      console.log(infoInput.firstName);
      console.log(infoInput.lastName);
      if (infoInput.firstName) await API.updateProfile(userId, "firstName", infoInput.firstName);
      if (infoInput.lastName) await API.updateProfile(userId, "lastName", infoInput.lastName);
      // trigger useEffect()
      setSubmit((submit+1));
    }
    // setValidated(true);
    // console.log('attempt to change name')
    //   console.log(infoInput.firstName);
    //   console.log(infoInput.lastName);
    //   console.log(validated)
    // if(validated) {
    //   console.log('attempt to change name')
    //   console.log(infoInput.firstName);
    //   console.log(infoInput.lastName);
    //   if (infoInput.firstName) await API.updateProfile(userId, "firstName", infoInput.firstName);
    //   if (infoInput.lastName) await API.updateProfile(userId, "lastName", infoInput.lastName);
    //   // trigger useEffect()
    //   setSubmit((submit+1));
    // }
  };

  return <>
    <h2 className='mt-4' style={styles.h2}>Channel name and description</h2>
    <p>Choose a channel name that represents you and your content.</p>
    <div className='user-name'>
      <Form noValidate validated={validated} >
        <Row>
          <Col>
            <Form.Label>First name (required)</Form.Label>
            <Form.Control 
              required
              placeholder="Enter first name" 
              defaultValue={defaultFirstName}
              type='text'
              name='firstName'
              onChange={inputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Col>
          <Col>
            <Form.Label>Last name (required)</Form.Label>
            <Form.Control 
              required
              placeholder="Enter last name"  
              defaultValue={defaultLastName}
              type='text'
              name="lastName"
              onChange={inputChange}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Col>
        </Row>
        <Button variant="primary" onClick={handleSubmit}>
            Submit
        </Button>
      </Form>
    </div>
  </>
}

export default BasicInfo;