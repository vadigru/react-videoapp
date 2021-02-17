import React from "react";
import PropTypes from "prop-types";

const AuthView = (props) => {
  const {toggleAuthStatus} = props;

  return (
    <button
      className={`btn`}
      onClick={() => toggleAuthStatus(true)}
    >НАЧАТЬ</button>
  );
};

AuthView.propTypes = {
  toggleAuthStatus: PropTypes.func.isRequired
};

export default AuthView;
