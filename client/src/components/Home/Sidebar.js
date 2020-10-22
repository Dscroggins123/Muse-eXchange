import React, { useState } from 'react';
import { Container, Card, Accordion, Row, Col, Button, ListGroup, Nav } from 'react-bootstrap';
import SongCard from '../SongCard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';;

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
      color: '#fff',
      background: '#282828'
    }
  } else {
    musicianStyle = {
      color: '#fff'
    }
  }

  let songsStyle;
  if (songsHover) {
    songsStyle = {
      color: '#fff',
      background: '#282828'
    }
  } else {
    songsStyle = {
      color: '#fff'
    }
  }

  let tutorialStyle;
  if (tutorialHover) {
    tutorialStyle = {
      color: '#fff',
      background: '#282828'
    }
  } else {
    tutorialStyle = {
      color: '#fff'
    }
  }

  let purchaseSongStyle;
  if (purchasedSongHover) {
    purchaseSongStyle = {
      color: '#fff',
      background: '#282828'
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
      background: '#282828'
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
        <h3 style={styles.h3}>Library</h3>
        <Nav.Item>
          <Nav.Link eventKey="musicians" data-event='musicians' onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={musicianStyle}>Musicians</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="songs" onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={songsStyle}>Songs</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="tutorials" onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={tutorialStyle}>Tutorials</Nav.Link>
        </Nav.Item>
        <h3 style={styles.h3}>Purchases</h3>
        <Nav.Item >
          <Nav.Link eventKey="purchasedSongs" onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={purchaseSongStyle}>Songs</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link eventKey="purchasedTutorials" onMouseEnter={hoverTrue} onMouseLeave={hoverFalse} style={purchaseTutorialStyle}>Tutorials</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <ListGroup>
        <ListGroup.Item action href="first">
          Link 1
        </ListGroup.Item>
        <ListGroup.Item action href="second">
          Link 2
        </ListGroup.Item>
      </ListGroup> */}

      <div className='mt-2 mb-4'>
        <h3 style={styles.sideHeading}>New Songs</h3>
        <ListGroup defaultActiveKey="#link1">
          {/* <ListGroup.Item action onClick={alertClicked}></ListGroup.Item> */}
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