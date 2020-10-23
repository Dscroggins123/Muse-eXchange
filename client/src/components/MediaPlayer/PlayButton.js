import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

class CustomPlayPause extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isPlaying !== media.isPlaying
  }

  pausePlayer = () => {
    setTimeout(function(){ this.props.media.isPlaying = true }, 3000);
  }

  _handlePlayPause = () => {
    this.props.media.playPause();
    console.log(this.props.media.isPlaying);
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
        {media.isPlaying ? <PauseIcon /> : <PlayArrowIcon /> }
      </button>
    )
  }
}

export default withMediaProps(CustomPlayPause)