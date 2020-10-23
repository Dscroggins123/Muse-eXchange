import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

class VolumeButton extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isMuted !== media.isMuted
  }

  _handlePlayPause = () => {
    this.props.media.muteUnmute()
  }

  render() {
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      > 
        {media.isMuted ? <VolumeOffIcon /> : <VolumeUpIcon /> }
        {/* {media.isPlaying ? 'Pause' : 'Play'} */}
      </button>
    )
  }
}

export default withMediaProps(VolumeButton)