import React, { PureComponent } from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";

class AuthView extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {toggleActiveLink, toggleAuthStatus} = this.props;

    return (
      <button
        className={`btn btn-start`}
        onClick={() => {
          toggleAuthStatus(true);
          toggleActiveLink(``);
        }}
      >
        START
      </button>
    );
  }
}

AuthView.propTypes = {
  toggleActiveLink: PropTypes.func.isRequired,
  toggleAuthStatus: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  toggleActiveLink(link) {
    return dispatch(ActionCreator.toggleActiveLink(link));
  },
  toggleAuthStatus(auth) {
    return dispatch(ActionCreator.toggleAuthStatus(auth));
  },
});

export default connect(null, mapDispatchToProps)(AuthView);
