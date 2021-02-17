import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Player from "../player/player.jsx";
import Links from "../links/links.jsx";

import {getActiveLink, getLinks} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state.js";

import {LINKS, VIEW_BUTTONS, DEFAULT_VIEW_TAB} from "../../const.js";

import "./play-view.scss";

class PlayView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: DEFAULT_VIEW_TAB.toLocaleLowerCase(),
      links: LINKS,
      linksChnaged: false
    };

    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  toggleActiveTab(name) {
    let {links} = this.state;
    links = links.reverse();

    this.setState({
      activeTab: name,
      links,
      linksChnaged: !this.state.linksChnaged
    });
  }

  render() {
    const {activeLink, toggleActiveLink} = this.props;
    return (
      <div className={`play-view`}>
        <ul className={`play-view__menu menu`}>
          {VIEW_BUTTONS.map((button, i) => {
            return (
              <li key={button + i} className={`menu__item`}>
                <button
                  name={button.toLocaleLowerCase()}
                  className={`btn btn${this.state.activeTab === button.toLocaleLowerCase() ? `--active` : ``}`}
                  onClick={(evt) => this.toggleActiveTab(evt.target.name)}
                >
                  {button}
                </button>
              </li>
            );
          })}
        </ul>
        <Player activeLink={activeLink} />
        <Links links={this.state.links} linksChanged={this.state.linksChnaged} toggleActiveLink={toggleActiveLink} />
      </div>
    );
  }
}

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
  toggleActiveLink: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayView);
