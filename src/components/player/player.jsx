import React from "react";
import PropTypes from "prop-types";
import Hls from "hls.js";
// import ReactHlsPlayer from "react-hls-player";
// import {MediaProvider, Video} from "react-hlsjs";

import "./player.scss";

class Player extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.playVideo();
  }

  componentDidUpdate() {
    this.playVideo();
  }

  playVideo() {
    const {activeLink} = this.props;
    if (Hls.isSupported()) {
      const video = this.videoRef.current;
      const hls = new Hls();
      // bind them together
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log(`video and hls.js are now bound together !`);
        hls.loadSource(activeLink);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log(
              `manifest loaded, found ` + data.levels.length + ` quality level`
          );
        });
      });
      video.controls = true;
      if (this.props.tabToggled) {
        video.pause();
      } else {
        video.play();
      }

    }
  }

  render() {
    // const {activeLink} = this.props;
    return (
      <div className={`play-view_palyer player`}>
        <video
          ref={this.videoRef}
          id="video"
          width="768"
          height="430"
        ></video>
        {/* <ReactHlsPlayer
          url={activeLink}
          autoplay={false}
          controls={true}
          width={768}
          height={430}
        /> */}
        {/* <MediaProvider mediaSource={activeLink} setPlaybackRate={5}>
          <Video />
        </MediaProvider> */}
      </div>
    );
  }
}

Player.propTypes = {
  activeLink: PropTypes.string.isRequired
};

export default Player;
