import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import ModalForm from './ModalForm';
import TutorialForm from './TutorialForm';
import API from '../../utils/API';
import { Close } from '@material-ui/icons';
require('dotenv').config();

function TutorialModal({ state, field, close, submit, setSubmit }) {
  // console.log('close: ', close);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setUser(JSON.parse(localStorage.getItem("currentUser")));
    }
    console.log('use effect', field)
    setValue({ selectField: field })
  }, [field])

  const handleSubmit = async () => {
    setLoading(true);
    
    let dataTutorials = {
      link: value.tutoriallink,
      title: value.tutorialtitle,
      price: value.tutorialprice
    }
    if (typeof value.tutorialtype === 'undefined') {
      console.log('condition is true')
      dataTutorials.type = 'Guitar'
    } else {
      dataTutorials.type = value.tutorialtype
    }

    API.AddTutorials(user._id, dataTutorials)
    setLoading(false);
    setUploaded(true);
    setValue({});
    setSubmit(submit + 1);
    value.selectField = '';
  }

  const modalClose = () => {
    if (!loading) {
      value.selectField = '';
      close();
    }
  }

  return (
    <>
      {console.log(value.selectField)}
      <Modal
        show={state}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TutorialForm getValue={setValue} values={value} /> {/** setValue = getValue */}
        </Modal.Body>
        <Modal.Footer>
          {loading && (<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>)}
          {uploaded && (<div>
            <div className="text-success">Audio successfully uploaded</div>
          </div>)}
          <Button variant="dark" onClick={handleSubmit}>Submit</Button>
          {!loading && (
            <Button variant="dark" onClick={modalClose}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default TutorialModal;