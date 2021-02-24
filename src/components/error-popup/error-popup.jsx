import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";

const ErrorPopup = (props) => {
  const {
    setAuthStatus,
    resetData,
    resetState,
  } = props;

  const reset = () => {
    resetData();
    resetState();
    setAuthStatus(false);
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
  resetData() {
    return dispatch(DataActionCreator.resetData());
  },
  resetState() {
    return dispatch(ActionCreator.resetState());
  },
  setAuthStatus(auth) {
    return dispatch(UserActionCreator.setAuthStatus(auth));
  },
});

ErrorPopup.propTypes = {
  resetData: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  setAuthStatus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ErrorPopup);
