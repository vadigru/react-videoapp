import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user.js";

const ErrorPopup = (props) => {
  const {
    setActiveLink,
    setActiveTab,
    setAuthStatus,
    showErrorPopup,
    showContent,
    showPlayer,
  } = props;

  const reset = () => {
    setActiveLink(``);
    setActiveTab(``);
    setAuthStatus(false);
    showErrorPopup(false);
    showContent(false);
    showPlayer(false);
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
  setActiveLink(link) {
    return dispatch(ActionCreator.setActiveLink(link));
  },
  setActiveTab(tab) {
    return dispatch(ActionCreator.setActiveTab(tab));
  },
  setAuthStatus(auth) {
    return dispatch(UserActionCreator.setAuthStatus(auth));
  },
  showErrorPopup(popup) {
    return dispatch(ActionCreator.showErrorPopup(popup));
  },
  showContent(isContent) {
    return dispatch(ActionCreator.showContent(isContent));
  },
  showPlayer(isPlayer) {
    return dispatch(ActionCreator.showPlayer(isPlayer));
  },
});

ErrorPopup.propTypes = {
  setActiveLink: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setAuthStatus: PropTypes.func.isRequired,
  showErrorPopup: PropTypes.func.isRequired,
  showContent: PropTypes.func.isRequired,
  showPlayer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPopup);
