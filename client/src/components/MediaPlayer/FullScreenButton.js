import React, { Component } from 'react'
import { withMediaProps } from 'react-media-player'
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

class FullScreenButton extends Component {
  shouldComponentUpdate({ media }) {
    return this.props.media.isFullscreen !== media.isFullscreen
  }

  _handlePlayPause = () => {
    this.props.media.fullscreen()
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
        {media.isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon /> }
        {/* {media.isPlaying ? 'Pause' : 'Play'} */}
      </button>
    )
  }
}

export default withMediaProps(FullScreenButton)