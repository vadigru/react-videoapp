import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import AuthView from "../auth-view/auth-view.jsx";
import Links from "../links/links.jsx";
import Main from "../main/main.jsx";

import {getAuthStatus} from "../../reducer/user/selectors.js";

const App = (props) => {
  const {
    authStatus,
  } = props;

  return (
    <>
      {!authStatus ?
        <AuthView /> :
        <Main>
          <span name={`about`} className={`test-text`}>
            Simple video streaming app written on React and Redux.
          </span>
          <Links name={`view-1`} data-name={`video-links`} />
          <Links name={`view-2`} data-name={`video-links`} data-action={`reverse`} />
          <Links name={`view-3`} data-name={`video-links`} data-action={`shuffle`} />
        </Main>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

App.propTypes = {
  authStatus: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(App);

