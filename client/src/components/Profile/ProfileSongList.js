import React from 'react';
// Bootstrap
import {Row, Col, ListGroup, Image, Badge } from 'react-bootstrap';
import PurchaseBtn from "../PurchaseBtn";
import SmallPlayer from '../Music/SmallPlayer';

// Images
import songSVG from '../../assets/svg/song.svg';

const ProfileSongList = ({ songs, email, userId }) => {
  return <div style={{ height: '100%', overflow: "auto" }}>
    <ListGroup  variant='flush'>
      {songs.map((song) =>
        <ListGroup.Item class="d-flex justify-content-between"
          style={{
            background: 'transparent',
            padding: 'inherit'
          }}>
          {/* <div className='text-left ml-2 m-0' style={{fontSize: '14px', fontWeight: 700}}>{song.title}</div> */}
          <Row className='w-100 bg-light m-0 pt-2 pb-2'>
            <Col xs={6} className='d-flex justify-content-start' >
              <div className='align-self-center'>
                <SmallPlayer song={song}/>
              </div>
            </Col>
            <Col xs={4}>
              <p className='align-self-center m-0' style={{fontSize: '12.5px', fontWeight: 700}}>{song.title}</p>
              <Badge pill variant="dark" style={{fontSize: '12.5px', fontWeight: 700}}>{song.genre}</Badge>
            </Col>
            <Col xs={2}>
              <div className='d-flex justify-content-center'>
                <PurchaseBtn selleremail={email} title={song.title} price={song.price} id={song._id} currentuser={userId}/>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  </div>
}

export default ProfileSongList;