import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";

const ErrorPopup = (props) => {
  const {
    toggleActiveLink,
    toggleActiveTab,
    toggleAuthStatus,
    toggleErrorPopup,
    toggleShowContent,
    toggleShowPlayer,
  } = props;

  const reset = () => {
    toggleActiveLink(``);
    toggleActiveTab(``);
    toggleAuthStatus(false);
    toggleErrorPopup(false);
    toggleShowContent(false);
    toggleShowPlayer(false);
  };

  return (
    <div className={`error`}>
      <div className={`error__popup`}>
        <p className={`error__text`}>An error has occurred</p>
        <button
          className={`btn error__btn`}
          onClick={() => reset()}
        >
          START OVER
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleActiveLink(link) {
    return dispatch(ActionCreator.toggleActiveLink(link));
  },
  toggleActiveTab(tab) {
    return dispatch(ActionCreator.toggleActiveTab(tab));
  },
  toggleAuthStatus(auth) {
    return dispatch(ActionCreator.toggleAuthStatus(auth));
  },
  toggleErrorPopup(popup) {
    return dispatch(ActionCreator.toggleErrorPopup(popup));
  },
  toggleShowContent(isContent) {
    return dispatch(ActionCreator.toggleShowContent(isContent));
  },
  toggleShowPlayer(isPlayer) {
    return dispatch(ActionCreator.toggleShowPlayer(isPlayer));
  },
});

ErrorPopup.propTypes = {
  toggleActiveLink: PropTypes.func.isRequired,
  toggleActiveTab: PropTypes.func.isRequired,
  toggleAuthStatus: PropTypes.func.isRequired,
  toggleErrorPopup: PropTypes.func.isRequired,
  toggleShowContent: PropTypes.func.isRequired,
  toggleShowPlayer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPopup);
