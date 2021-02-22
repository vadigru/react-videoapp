import React, {Component} from "react";
import PropTypes from "prop-types";
import Hls from "hls.js";


class Player extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.playVideo();
  }

  componentDidUpdate(nextProps) {
    const {activeLink} = this.props;

    if (activeLink === nextProps.activeLink) {
      this.videoRef.current.pause();
      return false;
    }

    return this.playVideo();
  }

  playVideo() {
    const {activeLink} = this.props;

    if (Hls.isSupported()) {
      const video = this.videoRef.current;
      const hls = new Hls();

      if (activeLink !== ``) {
        hls.attachMedia(video);
      }

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(activeLink);
      });

      video.controls = true;
      hls.subtitleDisplay = false;
    }
  }

  render() {
    // const {activeLink} = this.props;

    return (
      <div className={`play-view_palyer player`}>
        <video
          ref={this.videoRef}
          autoPlay={true}
          id="video"
          width="100%"
        />
      </div>

    );
  }
}

Player.propTypes = {
  activeLink: PropTypes.string.isRequired
};

export default Player;
