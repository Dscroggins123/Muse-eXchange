import React, { useState, useEffect } from 'react';
// Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// Components
import ProductModal from './ProductModal';
import TutorialModal from './TutorialModal';
// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
// Components
import MediaPlayer from '../MediaPlayer';
import { Media, Player, controls, utils } from 'react-media-player'
// Icons
// API 
import API from '../../utils/API';

const {
  PlayPause,
  MuteUnmute,
  Volume,
  Duration,
  Progress,
  CurrentTime,
  SeekBar,
  Fullscreen,
} = controls
const { keyboardControls } = utils

const TutorialsList = ({ userId, submit, tutorialsList, setSubmit }) => {

  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setTutorials(tutorialsList);
  }, [tutorialsList])

  // Product Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteTutorial = e => {
    let tutorialId = e.currentTarget.dataset.id;
    API.removeTutorial(userId, tutorialId);
    setSubmit(submit + 1);
  }

  return <>
    {/* {console.log(tutorialsList)} */}
    <div className='m-2 p-2'>
      <a href="#" onClick={handleShow} style={{ color: '#1877FF', cursor: 'pointer', textDecoration: 'none' }}>
        <AddIcon /> Add tutorial
      </a>
    </div>
    <Row xs={1} md={2} lg={3} className='ml-2'>
      {tutorials.map((tutorial, index) => <>
        {tutorial.link && <>
          {console.log('one tutorial', tutorial)}
          <Col className='mb-2'>
            <Row>
              <Media>
                <div className="media">
                  <div className="media-player" style={{ background: '#181818' }}>
                    <Player autoPlay={false} src={tutorial.link} style={{ width: '380px', height: '213px' }} />
                  </div>
                </div>
              </Media>
              {/* <MediaPlayer link={tutorial.link} /> */}
            </Row>
            <Row style={{ width: '380px', background: '#F8F8F8' }}>
              <Col xs={9} className='pt-2' style={{ height: '80px' }}>
                <p className='m-0' style={{ fontSize: '14px' }}>
                  <span style={{ fontWeight: 700 }}>Title: </span> {tutorial.title}
                </p>
              </Col>
              <Col xs={3} className='p-0 pt-2 pr-2' style={{ height: '80px' }} >
                <Row xs={1} className='m-0 d-flex justify-content-between' style={{ fontSize: '14px', height: '100%' }}>
                  <Col className='p-0 text-left'><span style={{ fontWeight: 700 }}>Price: </span>${tutorial.price}</Col>
                  <Col className='p-0 text-right'>
                    <a href='#' data-id={tutorial._id} onClick={deleteTutorial}>
                      <DeleteIcon style={{ cursor: 'pointer', color: '#747474' }} />
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </>}
      </>)}
    </Row>
    <TutorialModal state={show} open={handleShow} close={handleClose} submit={submit} setSubmit={setSubmit} />
    <div style={{ height: '20vh' }}></div>
  </>
}

export default TutorialsList;