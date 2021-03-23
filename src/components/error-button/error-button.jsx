import React, { Component } from "react";
import PropTypes from "prop-types";

class ErrorButton extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
      reset: PropTypes.func.isRequired
  }

  onInput(e) {
    const {reset} = this.props;

    if (e.code === `Escape`) {
      reset();
    }
  }

  render() {
    const {reset} = this.props;

    return(
      <button
        className={`btn error__btn`}
        onClick={reset}
      >
        START OVER
    </button>
    );
  }
}

export default ErrorButton;
