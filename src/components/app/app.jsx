import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";


import AuthView from "../auth-view/auth-view.jsx";
import PlayView from "../play-view/play-view.jsx";

import {getAuthStatus} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state.js";

import './app.scss';

const App = (props) => {
  const {authStatus, toggleAuthStatus} = props;

  return (
    <>
      {!authStatus ?
        <AuthView toggleAuthStatus={toggleAuthStatus} /> :
        <PlayView />
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAuthStatus(auth) {
    return dispatch(ActionCreator.toggleAuthStatus(auth));
  },
});

App.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  toggleAuthStatus: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

