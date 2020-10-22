import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner';
import ModalForm from './ModalForm';
import SongForm from './SongForm';
import API from '../../utils/API';
import { Close } from '@material-ui/icons';
require('dotenv').config();

function SongModal({ state, field, close, submit, setSubmit }) {
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
    if (value.files) {
      setLoading(true);
      const data = new FormData();
      data.append('file', value.files[0]);
      data.append('upload_preset', 'MusiceXchange'); // must be same name as upload
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/raw/upload/`, // API base url
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json() // get json response
      let dataSongs = {
        author: value.artist,
        title: value.title,
        file: file.secure_url,
        price: value.price,
        public_id: file.public_id
      }
      if (typeof value.genre === 'undefined') {
        console.log('condition is true')
        dataSongs.genre = 'Hip-Hop'
      } else {
        dataSongs.genre = value.genre
      }

      await API.AddSongs(user._id, dataSongs);
      setLoading(false);
      setUploaded(true);
      setValue({});
      setSubmit(submit + 1);
    }
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
      <Modal
        show={state}
        onHide={modalClose}
        backdrop="static"
        keyboard={false}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SongForm getValue={setValue} values={value} /> {/** setValue = getValue */}
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
export default SongModal;