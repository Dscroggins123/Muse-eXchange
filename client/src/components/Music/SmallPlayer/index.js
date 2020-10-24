import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';

import { Media, Player, controls, utils } from 'react-media-player'
import PlayButton from '../../MediaPlayer/PlayButton';
import VolumeButton from '../../MediaPlayer/VolumeButton';

import './style.css'
const { PlayPause, MuteUnmute, Volume, Duration, Progress,
  CurrentTime,
  SeekBar,
  Fullscreen,
} = controls
const { keyboardControls } = utils

const styles = {
  backgroundColor: "blue !important"
}

const SmallPlayer = ({ song }) => {
  // Testing functions in AudioPlayer
  const callFunc = () => {
    console.log('heelo')
  }

  console.log(song);
  let songFile = '';
  try {
    songFile = song.file
  } catch(err) {
    console.log('No file')
  }
  return (
    <Media>
      <div className="media">
        <div className="media-player">
          <Player src={song.file} style={{ display: 'none' }} />
          <div className="media-controls d-flex justify-content-between">
            <PlayButton fontSize='35px' style={{outline: 'none', color: '#747474', fontSize: '30px'}}/>
            <VolumeButton fontSize='25px' className='align-self-center'  style={{outline: 'none', color: '#747474'}}/>
            <div className='media-vol align-self-center mr-1'>
              <Volume className='media-vol' />
            </div>
            <CurrentTime className='align-self-center' style={{outline: 'none', color: '#000', fontSize: '12px'}}/>
            <span className='align-self-center' style={{color: '#000', fontSize: '12px'}}>/</span>
            <Duration className='align-self-center mr-1' style={{outline: 'none', color: '#000', fontSize: '12px'}}/>
            <div className='media-seek-bar-profile align-self-center'>
              <SeekBar />
            </div>
          </div>
        </div>
      </div>
    </Media>
    // <AudioPlayer style={{width: '100%'}}
    //   src={song.file}
    //   onPlay={() => callFunc()}
    //   layout="stacked-reverse" 
    // />
  )
}

export default SmallPlayer;