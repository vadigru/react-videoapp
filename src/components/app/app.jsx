import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import AuthView from "../auth-view/auth-view.jsx";
import Links from "../links/links.jsx";
import Main from "../main/main.jsx";

import {getAuthStatus, getLinks} from "../../reducer/state/selectors";
import {shuffleArray} from "../../utils/common.js";

const App = (props) => {
  const {
    authStatus,
    links
  } = props;

  return (
    <>
      {!authStatus ?
        <AuthView /> :
        <Main>
          <span name={`about`} className={`test-text`}>
            Simple video streaming app written on React and Redux.
          </span>
          <Links name={`view-1`} links={links}/>
          <Links name={`view-2`} links={links.slice().reverse()}/>
          <Links name={`view-3`} links={shuffleArray(links.slice())}/>
        </Main>
      }
    </>
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  links: getLinks(state)
});

App.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default connect(mapStateToProps, null)(App);

