import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/user/user.js";

const AuthView = (props) => {
  const {setAuthStatus} = props;

  return (
    <button
      className={`btn start-btn`}
      onClick={() => {
        setAuthStatus(true);
      }}
    >
      START
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setAuthStatus(auth) {
    return dispatch(ActionCreator.setAuthStatus(auth));
  },
});

AuthView.propTypes = {
  setAuthStatus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AuthView);
