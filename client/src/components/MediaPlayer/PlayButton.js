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
    {console.log('media', this.props.media)}
    const { className, style, media } = this.props
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={this._handlePlayPause}
      > 
        {console.log(this.props.fontSize)}
        {media.isPlaying ? 
          <PauseIcon style={{ fontSize: `${this.props.fontSize}`}}/> 
          : <PlayArrowIcon style={{ fontSize: `${this.props.fontSize}`}}/> }
      </button>
    )
  }
}

export default withMediaProps(CustomPlayPause)