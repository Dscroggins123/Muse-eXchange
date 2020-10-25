import React from 'react';
// Components
import PlayButton from '../MediaPlayer/PlayButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeButton from '../MediaPlayer/VolumeButton';
import { Container, Row, Col } from 'react-bootstrap';
// React Media Player
import { Media, Player, controls, utils } from 'react-media-player';
// styling
import './songplayer.css';

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

const SongPlayer = ({ link, author, title }) => {
  return <>
    <Media>
      <div className="media" style={{ width: '100%' }}>
        <div className="media-player" style={{ width: '100%' }}>
          <Player src={link} autoPlay={true} style={{ display: 'none' }}/>
          <Row className="media-controls"
            style={{ width: '100%', height: '80px' }}>
            <Col className='d-flex justify-content-start'>
              {(link.length !== 0) ? <>
                <PlayButton fontSize='40px' className='align-self-center' style={{ outline: 'none', color: '#fff' }} />
              </> : <> 
                <PlayArrowIcon  className='align-self-center' style={{ outline: 'none', color: '#fff', fontSize: '40px', cursor: 'pointer' }}/>
              </>}
              <div className='align-self-center d-flex justify-content-start ml-4 mr-4'>
                <CurrentTime className='align-self-center' style={{ outline: 'none', color: '#fff', fontSize: '10px' }} />
                <span className='align-self-center'  style={{ color: '#fff', fontSize: '10px' }}>/</span>
                <Duration className='align-self-center'  style={{ outline: 'none', color: '#fff', fontSize: '10px' }} />
                <div className='media-seek-bar-home ml-2'>
                  <SeekBar />
                </div>
              </div>
              <div className='media-vol-home align-self-center'>
                <VolumeButton style={{ outline: 'none', color: '#fff' }} />
                <Volume className='media-vol-home' />
              </div>
            </Col>
            <Col className='mr-5 d-flex justify-content-center'>
              {(title && author) && <> 
                <div className='media-vol align-self-center'>
                  {title} by {author}
                </div>
              </>}
            </Col>
          </Row>
        </div>
      </div>
    </Media>
  </>
}
export default SongPlayer;