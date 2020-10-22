import React, { useState, useEffect } from 'react';
// Components
import ProductModal from './ProductModal';
import TutorialModal from './TutorialModal';
// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// API 
import API from '../../utils/API';

const TutorialsList = ({ userId, submit, setSubmit }) => {
   // Product Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
    <div>Tutorials List</div>
    <a href="#" onClick={handleShow} style={{ color: '#1877FF', cursor: 'pointer', textDecoration: 'none' }}>
      <AddIcon /> Add tutorial
    </a>
    <TutorialModal state={show} open={handleShow} close={handleClose} submit={submit} setSubmit={setSubmit} />
  </>
}

export default TutorialsList;