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
            background: 'transparent',
            padding: 'inherit'
          }}>
          {/* <div className='text-left ml-2 m-0' style={{fontSize: '14px', fontWeight: 700}}>{song.title}</div> */}
          <Row className='w-100'>
            <Col xs={2} className="pt-0 pr-0 pb-0">
              <Image src={songSVG} fluid style={{ width: "92%"}} />
            </Col>
            <Col xs={7} className='p-0'>
              <SmallPlayer song={song} />
            </Col>
            <Col xs={3} className="pr-0">
              <div className='d-flex justify-content-center'>
                  <p className='text-left w-100 m-0 mb-1 mt-1' style={{fontSize: '12.5px', fontWeight: 700}}>{song.title}</p>
              </div>
              <div className='d-flex justify-content-center'>
                <PurchaseBtn selleremail={email} title={song.title} price={song.price} id={song._id} currentuser={userId}/>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      )}
    </ListGroup>
  </>
}

export default ProfileSongList;