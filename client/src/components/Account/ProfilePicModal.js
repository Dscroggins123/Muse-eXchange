import React, { useState, useEffect } from 'react';
import { Container, Modal, Form, Image, ListGroup, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
// Components
import Cropper from '../Cropper';
// API
import API from '../../utils/API';

const ProfilePicModal = ({userId, submit, setSubmit}) => {
  
  // Profile Pic 
  const [uploadFiles, setUploadFiles] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCropped, setIsCropped] = useState(false);

  /** ===== Bootstrap modal ===== */
  // State and Functions for Bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   /** ===== Upload Profile info ===== */
  // Function to upload and image to Cloudinary
  const uploadImage = async () => {
    const data = new FormData();
    // data.append('file', uploadFiles[0]);
    data.append('file', uploadFiles);
    data.append('upload_preset', 'MusiceXchange'); // must be same name as upload
    setLoading(true)
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`, // API base url
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json() // get json response
    console.log(file.public_id)
    await API.updateProfile(userId, "profilePic", file.secure_url);
    // setProfilePic(file.secure_url);
    setLoading(false);
    setIsCropped(false);
    setSubmit((submit + 1));
  }

  // Upload Profile Information
  const handleSubmit = async () => {
    handleClose(); // closes the modal
    if (uploadFiles) {
      uploadImage();
    }
  }

  /** Cropper version */
  const uploadFileState = file => {
    console.log('from Cropper', file)
    setUploadFiles(file);
    setIsCropped(true);
  }

  return <>
    {/* {console.log(userId)} */}
    <div
      style={{ color: '#1877FF', cursor: 'pointer'}}
      onClick={handleShow}>
      Change
    </div>

    {/** Display Modal */}
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Customize profile picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <ListGroup>
              <ListGroup.Item>
                <Cropper uploadFileState={uploadFileState} />
              </ListGroup.Item>
            </ListGroup>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/** Buttons */}
        <div
          style={{ color: '#1877FF', cursor: 'pointer', fontWeight: 700}}
          onClick={handleClose}>
          Close
          </div>
        {isCropped && <> 
          <Button
            style={{ backgroundColor: "#FE064C", color: '#fff', border: '0px' }}
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        </>}

      </Modal.Footer>
    </Modal>
  </>
}

export default ProfilePicModal;