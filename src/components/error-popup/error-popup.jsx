import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";

import {LINKS} from "../../const.js";

const ErrorPopup = (props) => {
  const {
    setActiveLink,
    setActiveTab,
    setAuthStatus,
    setLinks,
    showErrorPopup,
  } = props;

  const reset = () => {
    setActiveLink(LINKS[0]);
    setActiveTab(`view-1`);
    setAuthStatus(false);
    setLinks(LINKS);
    showErrorPopup(false);
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
  setLinks(links) {
    return dispatch(DataActionCreator.setLinks(links));
  },
});

ErrorPopup.propTypes = {
  setActiveLink: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setAuthStatus: PropTypes.func.isRequired,
  setLinks: PropTypes.func.isRequired,
  showErrorPopup: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPopup);
