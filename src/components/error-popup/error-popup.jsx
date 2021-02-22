import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";

const ErrorPopup = (props) => {
  const {
    toggleAuthStatus,
    toggleErrorPopupStatus
  } = props;

  return (
    <div className={`error`}>
      <div className={`error__popup`}>
        <p className={`error__text`}>An error has occurred</p>
        <button
          className={`btn error__btn`}
          onClick={() => {
            toggleAuthStatus(false);
            toggleErrorPopupStatus(false);
          }}
        >
          START OVER
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleAuthStatus(auth) {
    return dispatch(ActionCreator.toggleAuthStatus(auth));
  },
  toggleErrorPopupStatus(popup) {
    return dispatch(ActionCreator.toggleErrorPopupStatus(popup));
  },
});

ErrorPopup.propTypes = {
  toggleAuthStatus: PropTypes.func.isRequired,
  toggleErrorPopupStatus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPopup);
