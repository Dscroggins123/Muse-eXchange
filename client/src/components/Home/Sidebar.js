import React, { useState } from 'react';
import { Container, Card, Accordion, Row, Col, Button, ListGroup, Nav } from 'react-bootstrap';
import SongCard from '../SongCard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const styles = {
  home: {
    height: "100%"
  },
  heading: {
    fontSize: '20px',
    borderBottom: '1px solid #282828'
  },
  sideHeading: {
    fontSize: '20px',
  },
  sideCol: {
    // background: '#F8F8F8'
    background: '#121212',
    color: '#fff',
  },
  accordionButton: {
    backgroundColor: 'transparent',
    border: '0px',
    outline: 'none',
    // textDecoration: 'none'
  },
  expandIcon: {
    fontSize: '16px'
  },
  userListItem: {
    fontSize: '12px'
  }
}

const Sidebar = () => {
  const [hover, setHover] = useState(false);
  const [musiciansHover, setMusiciansHover] = useState(false);
  const [songsHover, setSongsHover] = useState(false);
  const [tutorialHover, setTutorialHover] = useState(false);
  const [purchasedSongHover, setPurchasedHover] = useState(false);
  const [purchasedTutorialHover, setPurchasedTutorialHover] = useState(false);

  const hoverTrue = (e) => {
    console.log(e.target.dataset.rbEventKey)
    const eventKey = e.target.dataset.rbEventKey;
    if (eventKey === 'musicians') {
      setMusiciansHover(true);
    } else if (eventKey === 'songs') {
      setSongsHover(true);
    } else if (eventKey === 'tutorials') {
      setTutorialHover(true);
    } else if (eventKey === 'purchasedSongs') {
      setPurchasedHover(true);
    } else if (eventKey === 'purchasedTutorials') {
      setPurchasedTutorialHover(true);
    } 
    // setHover(true);
  }

  const hoverFalse = () => {
    setMusiciansHover(false);
    setSongsHover(false);
    setTutorialHover(false);
    setPurchasedHover(false);
    setPurchasedTutorialHover(false);
  }

  let musicianStyle;
  if (musiciansHover) {
    musicianStyle = {
      fontWeight: 700,
      color: '#fff',
      // background: '#282828'
    }
  } else {
    musicianStyle = {
      color: '#fff'

    }
  }

  let purchaseSongStyle;
  if (purchasedSongHover) {
    purchaseSongStyle = {
      color: '#fff',
      fontWeight: 700,
    }
  } else {
    purchaseSongStyle = {
      color: '#fff'
    }
  }

  let purchaseTutorialStyle;
  if (purchasedTutorialHover) {
    purchaseTutorialStyle = {
      color: '#fff',
      fontWeight: 700,
    }
  } else {
    purchaseTutorialStyle = {
      color: '#fff'
    }
  }


  const styles = {
    h3: {
      color: '#747474',
      fontSize: '16px'
    }
  }

  return <>
    <Container fluid>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="musicians" className='d-flex justify-content-left' data-event='musicians' onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={musicianStyle}>
            <HomeIcon />
            <div className='ml-2' style={{paddingTop: '2px'}}>Home</div>
          </Nav.Link>
        </Nav.Item>
        <h3 className='m-0' style={styles.h3}>Purchases</h3>
        <Nav.Item >
          <Nav.Link eventKey="purchasedSongs" className='d-flex justify-content-left' onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={purchaseSongStyle}>
            <LibraryMusicIcon />
            <div className='ml-2' style={{paddingTop: '2px'}}>Songs</div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="purchasedTutorials" className='d-flex justify-content-left' onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={purchaseTutorialStyle}>
            <VideoLibraryIcon />
            <div className='ml-2' style={{paddingTop: '2px'}}>Tutorials</div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      <div className='mt-2 mb-4'>
        <h3 style={styles.h3}>New Songs</h3>
        <ListGroup defaultActiveKey="#link1">
          
          <ListGroup.Item className='p-0 d-flex justify-content-between' style={{ background: '#181818', color: '#fff' }}>
            <div style={{ width: '4rem' }}>
              <SongCard />
            </div>
            <div className='w-100 ml-2 align-self-center' style={{ fontSize: '12px' }}>
              <div>New Song 1</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className='p-0 d-flex justify-content-between' style={{ background: '#181818', color: '#fff' }}>
            <div style={{ width: '4rem' }}>
              <SongCard />
            </div>
            <div className='w-100 ml-2 align-self-center' style={{ fontSize: '12px' }}>
              <div>New Song 2</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className='p-0 d-flex justify-content-between' style={{ background: '#181818', color: '#fff' }}>
            <div style={{ width: '4rem' }}>
              <SongCard />
            </div>
            <div className='w-100 ml-2 align-self-center' style={{ fontSize: '12px' }}>
              <div>New Song 3</div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  </>
}

export default Sidebar;