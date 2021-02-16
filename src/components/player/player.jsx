import React from "react";
import Hls from "hls.js";

import "./player.scss";

class Player extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this._playVideo();
  }

  componentDidUpdate() {
    this._playVideo();
  }

  _playVideo() {
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
      video.play();
    }
  }

  render() {
    return (
      <div className={`play-view_palyer player`}>
        <video
          ref={this.videoRef}
          id="video"
          width="768"
          height="512"
        ></video>
      </div>
    );
  }
}

export default Player;
