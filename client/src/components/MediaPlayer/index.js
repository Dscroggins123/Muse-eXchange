import React from 'react';
import { Media, Player, controls, utils } from 'react-media-player'
import PlayButton from './PlayButton';
import VolumeButton from './VolumeButton';
import FullScreenButton from './FullScreenButton';
import './style.css'
const { PlayPause, MuteUnmute, Volume, Duration, Progress,
  CurrentTime,
  SeekBar,
  Fullscreen,
} = controls
const { keyboardControls } = utils

const MediaPlayer = ({link}) => {
  return <> 
    <Media>
      <div className="media">
        <div className="media-player" style={{background: '#181818'}}>
          <Player src={link} style={{ width: '380px', height: '213px' }} />
          <div className="media-controls d-flex justify-content-between" style={{ width: '380px'}}>
            <PlayButton style={{outline: 'none', color: '#fff'}}/>
            <VolumeButton style={{outline: 'none', color: '#fff'}}/>
            <div className='media-vol'>
              <Volume className='media-vol' />
            </div>
            <CurrentTime className='align-self-center' style={{outline: 'none', color: '#fff', fontSize: '10px'}}/>
            <span className='align-self-center' style={{color: '#fff', fontSize: '10px'}}>/</span>
            <Duration className='align-self-center' style={{outline: 'none', color: '#fff', fontSize: '10px'}}/>
            <div className='media-seek-bar'>
              <SeekBar />
            </div>
            <FullScreenButton style={{outline: 'none', color: '#fff'}}/>
          </div>
        </div>
      </div>
    </Media>
  </>
}

export default MediaPlayer;