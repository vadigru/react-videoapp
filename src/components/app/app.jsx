import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import AuthView from "../auth-view/auth-view.jsx";
import PlayViews from "../play-views/play-views.jsx";
import PlayView from "../play-view/play-view.jsx";
import TestComponent from "../test-component/test-component.jsx";

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
        <PlayViews>
          <PlayView name={`view-1`} links={links}/>
          <PlayView name={`view-2`} links={links.slice().reverse()}/>
          <PlayView name={`view-3`} links={shuffleArray(links.slice())}/>
        </PlayViews>
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
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, null)(App);

