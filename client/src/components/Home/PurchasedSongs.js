import React, {useState, useEffect} from 'react';
// Bootstrap
import { Container, ListGroup } from 'react-bootstrap';
// Component
import SongPlayer from './SongPlayer';
// API
import API from '../../utils/API';
const PurchasedSongs = () => {
  
  const [link, setLink] = useState('');

  const selectSong = e => {
    console.log(e.target.dataset.link)
    setLink(e.target.dataset.link);
  }

  return <>
    <ListGroup variant="flush">
      <ListGroup.Item className='text-light' 
        data-link='https://res.cloudinary.com/dxp5wxx2f/raw/upload/v1603596863/MusiceXchange/It_s_Hard_To_Find_Solace_-_1_5_19_10.01_PM_u3k8i0.m4a' 
        style={{ background: '#181818', outline: 'none' }} onClick={selectSong}>Cras justo odio
      </ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{ background: '#181818', outline: 'none' }}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className='text-light' style={{background: '#181818', outline: 'none'}}>Cras justo odio</ListGroup.Item>

    </ListGroup>
    <Container fluid className='player-div d-flex justify-content-center' style={{ width: '100%', background: '#282828', position: 'fixed', bottom: 0 }}>
      <SongPlayer link={link}/>
    </Container>
  </>
}

export default PurchasedSongs;