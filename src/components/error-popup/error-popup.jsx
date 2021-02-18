import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";

import "./error-popup.scss";

class ErrorPopup extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {toggleAuthStatus, togglePopup} = this.props;
    return (
      <div className={`error`}>
        <div className={`error__popup`}>
          <p className={`error__text`}>this link is broken</p>
          <button
            className={`btn error__btn`}
            onClick={() => {
              toggleAuthStatus(false);
              togglePopup(false);
            }}
          >START OVER</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleAuthStatus(auth) {
    return dispatch(ActionCreator.toggleAuthStatus(auth));
  },
  togglePopup(popup) {
    return dispatch(ActionCreator.togglePopup(popup));
  },
});

ErrorPopup.propTypes = {
  toggleAuthStatus: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPopup);
