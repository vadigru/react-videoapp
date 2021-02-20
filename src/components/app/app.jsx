import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import AuthView from "../auth-view/auth-view.jsx";
import PlayViews from "../play-views/play-views.jsx";

import {getAuthStatus, getLinks} from "../../reducer/state/selectors";
import {shuffleArray} from "../../utils/common.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {authStatus, links} = this.props;

    return (
      <>
        {!authStatus ?
          <AuthView /> :
          <PlayViews>
            <div name={`VIEW-1`} links={links}/>
            <div name={`VIEW-2`} links={links.slice().reverse()}/>
            <div name={`VIEW-3`} links={shuffleArray(links.slice())}/>
          </PlayViews>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  links: getLinks(state)
});

App.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, null)(App);

