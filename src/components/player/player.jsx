import React from "react";
import ReactHlsPlayer from "react-hls-player";
import {LINKS} from "../../const.js";
// import Hls from "hls.js";
// import ReactHLS from 'react-hls';

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  _onTouchInsidePlayer() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  render() {
    return (
      <div className={`play-view_palyer player`}>
        {/* <video id="video" src={`${LINKS[0]}`} width="100%" autoPlay={true}></video> */}
        <ReactHlsPlayer
          url='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
          autoplay={false}
          controls={true}
          width={500}
          height={375}
        />
      </div>
    );
  }
}

export default Player;
