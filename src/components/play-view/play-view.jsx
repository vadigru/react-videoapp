import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Player from "../player/player.jsx";
import Links from "../links/links.jsx";

import {getActiveLink} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state.js";

import "./play-view.scss";

const PlayView = (props) => {
  const {activeLink, toggleActiveLink} = props;
  return (
    <div className={`play-view`}>
      <ul className={`play-view__menu menu`}>
        <li className={`menu__item`}><button className={`btn`}>PLAY_VIEW-1</button></li>
        <li className={`menu__item`}><button className={`btn`}>PLAY_VIEW-2</button></li>
      </ul>
      <Player activeLink={activeLink}/>
      <Links toggleActiveLink={toggleActiveLink}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleActiveLink(link) {
    return dispatch(ActionCreator.toggleActiveLink(link));
  },
});

PlayView.propTypes = {
  activeLink: PropTypes.string.isRequired,
  toggleActiveLink: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayView);
