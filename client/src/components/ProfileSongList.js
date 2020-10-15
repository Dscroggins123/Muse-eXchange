import React from 'react';
// Bootstrap
import {Row, Col, ListGroup, Image } from 'react-bootstrap';
import PurchaseBtn from "./PurchaseBtn";
import SmallPlayer from './Music/SmallPlayer';

// Images
import songSVG from '../assets/svg/song.svg';

const ProfileSongList = ({ songs, email, userId }) => {
  return <>
    <ListGroup style={{ height: '100%', overflow: "auto" }} variant='flush'>
      {songs.map((song) =>
        <ListGroup.Item class="d-flex justify-content-between"
          style={{
            background: 'rgba(228, 228, 228, 0.9)',
            padding: 'inherit'
          }}>
          <Row className='w-100'>
            <Col xs={2} className="pb-0 pt-0">
              <Image src={songSVG} fluid style={{ width: "100%", height: '100%' }} />
            </Col>
            <Col xs={7}>
              <SmallPlayer song={song} />
            </Col>
            <Col className="p-0">
              <div>
                <div className="text-left">Song: {song.title}</div>
                <div className="text-left">Artist: {song.author}</div>
                <PurchaseBtn selleremail={email} title={song.title} price={song.price} id={song._id} currentuser={userId} />
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
}

export default ProfileSongList;