import React, {Component} from "react";
import PropTypes from "prop-types";
import Hls from "hls.js";

class Player extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.hls = new Hls();
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

  componentWillUnmount() {
    if (this.hls) {
      this.hls.destroy();
    }
  }

  playVideo() {
    const {activeLink} = this.props;
    const video = this.videoRef.current;

    if (Hls.isSupported()) {
      if (activeLink !== ``) {
        this.hls.loadSource(activeLink);
        this.hls.attachMedia(video);
        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      }

      video.controls = true;
      this.hls.subtitleDisplay = false;
    }
  }

  render() {
    return (
      <div className={`player`}>
        <video
          ref={this.videoRef}
          id="video"
          width="100%"
        />
      </div>
    );
  }
}

Player.propTypes = {
  activeLink: PropTypes.string.isRequired,
};

export default Player;
