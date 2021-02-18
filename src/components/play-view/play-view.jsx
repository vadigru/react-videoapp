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
      activeTab: ``,
      tabToggled: false,
      showContent: false,
      localLinks: [...this.props.links]
    };

    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  componentDidMount() {
    const {links, toggleActiveLink} = this.props;

    toggleActiveLink(links[0]);
  }

  toggleActiveTab(evt) {
    const {links} = this.props;
    const {activeTab} = this.state;

    if (evt.target.name === activeTab) {
      return;
    }

    if (evt.target.name === VIEW_BUTTONS[0].toLowerCase()) {

      this.setState({
        localLinks: [...links].slice()
      });
    }
    if (evt.target.name === VIEW_BUTTONS[1].toLowerCase()) {
      this.setState({
        localLinks: [...links].slice().reverse()
      });
    }
    this.setState({
      activeTab: evt.target.name,
      showContent: true,
    });
  }

  render() {
    const {activeLink, toggleActiveLink, showPopup} = this.props;
    const {activeTab, localLinks} = this.state;

    return (
      <div className={`play-view`}>
        <ul className={`play-view__menu menu`}>
          {VIEW_BUTTONS.map((button, i) => {
            return (
              <li key={button + i} className={`menu__item`}>
                <button
                  name={button.toLocaleLowerCase()}
                  className={`btn menu__btn menu__btn${activeTab === button.toLocaleLowerCase() ? `--active` : ``}`}
                  onClick={(evt) => this.toggleActiveTab(evt)}
                >
                  {button}
                </button>
              </li>
            );
          })}
        </ul>

        {this.state.showContent ?
          <div className={`play-view__wrapper`}>
            <Player activeLink={activeLink} />
            <Links links={localLinks} toggleActiveLink={toggleActiveLink} />
          </div> :
          null}

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
