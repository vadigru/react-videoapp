import React from "react";
import PropTypes from "prop-types";

const AuthView = (props) => {
  const {toggleAuthStatus} = props;

  return (
    <button
      className={`btn btn-start`}
      onClick={() => toggleAuthStatus(true)}
    >
      START
    </button>
  );
};

AuthView.propTypes = {
  toggleAuthStatus: PropTypes.func.isRequired
};

export default AuthView;
