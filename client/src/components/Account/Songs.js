import React, {useState, useEffect} from 'react';
// Bootstrap
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
// Components
import SongsTable from './SongsTable';
// SVGs
import defaultProfilePic from '../../assets/svg/profile.svg';
// Api
import API from '../../utils/API';

const styles = {
  h2: {
    fontSize: '16px', 
    fontWeight: 700
  }
}

const Songs = ({userId, profilePic, songIds, submit, setSubmit}) => {

  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    console.log(songIds)
    if (songIds) {
      songIds.map(songid => {
        API.getSongsByQuery(songid)
          .then(res => {
            setSongsList(songsList => [...songsList, res.data[0]])
          }).catch(err => console.log(err));
      })
    }
  }, [songIds]);

  return <>
    {console.log(songsList)}
    <Container fluid className='mt-4 mb-4'>
      <div className='songs-list mt-2'>
        <SongsTable songsList={songsList} submit={submit} setSubmit={setSubmit}/>
      </div>
    </Container>  
  </>
}

export default Songs;