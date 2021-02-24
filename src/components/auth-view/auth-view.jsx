import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";

const AuthView = (props) => {
  const {toggleAuthStatus} = props;

  return (
    <button
      className={`btn start-btn`}
      onClick={() => {
        toggleAuthStatus(true);
      }}
    >
      START
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleAuthStatus(auth) {
    return dispatch(ActionCreator.toggleAuthStatus(auth));
  },
});

AuthView.propTypes = {
  toggleAuthStatus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AuthView);
