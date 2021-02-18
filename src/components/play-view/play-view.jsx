import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Player from "../player/player.jsx";
import Links from "../links/links.jsx";
import ErrorPopup from "../error-popup/error-popup.jsx";

import {getActiveLink, getLinks, getPopup} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state.js";

import {VIEW_BUTTONS, DEFAULT_VIEW_TAB} from "../../const.js";

import "./play-view.scss";

class PlayView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: DEFAULT_VIEW_TAB.toLocaleLowerCase(),
    };

    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  toggleActiveTab(name) {
    let {links, setLinks} = this.props;

    setLinks(links.reverse());
    this.setState({
      activeTab: name,
    });
  }

  render() {
    const {activeLink, links, toggleActiveLink, showPopup} = this.props;

    return (
      <div className={`play-view`}>
        <ul className={`play-view__menu menu`}>
          {VIEW_BUTTONS.map((button, i) => {
            return (
              <li key={button + i} className={`menu__item`}>
                <button
                  name={button.toLocaleLowerCase()}
                  className={`btn btn-tab btn-tab${this.state.activeTab === button.toLocaleLowerCase() ? `--active` : ``}`}
                  onClick={(evt) => this.toggleActiveTab(evt.target.name)}
                >
                  {button}
                </button>
              </li>
            );
          })}
        </ul>
        <div className={`play-view__wrapper`}>
          <Player activeLink={activeLink} />
          <Links links={links} toggleActiveLink={toggleActiveLink} />
        </div>
        {showPopup ? <ErrorPopup /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
  links: getLinks(state),
  showPopup: getPopup(state),
});

const mapDispatchToProps = (dispatch) => ({
  setLinks(links) {
    return dispatch(ActionCreator.setLinks(links));
  },
  toggleActiveLink(link) {
    return dispatch(ActionCreator.toggleActiveLink(link));
  },
  togglePopup(popup) {
    return dispatch(ActionCreator.togglePopup(popup));
  }
});

PlayView.propTypes = {
  activeLink: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  setLinks: PropTypes.func.isRequired,
  showPopup: PropTypes.bool.isRequired,
  toggleActiveLink: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayView);
