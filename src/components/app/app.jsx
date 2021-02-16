import React from "react";
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/state/selectors";
// import {Operation as StateOperation} from "../../reducer/state/state.js";
import {ActionCreator} from "../../reducer/state/state.js";
import PropTypes from "prop-types";
import PlayView from "../play-view/play-view.jsx";
import './app.scss';

const App = (props) => {
  console.log(props);
  const {authStatus, toggleAuthStatus} = props;
  return (
    <>
      {!authStatus ? <button
        className={`btn`}
        onClick={() => toggleAuthStatus(true)}
      >НАЧАТЬ</button> :
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

