import React, {Children, PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Player from "../player/player.jsx";
import ErrorPopup from "../error-popup/error-popup.jsx";

import {getActiveLink, getErrorPopupStatus} from "../../reducer/state/selectors";

class PlayViews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: ``,
      showContent: false,
      showPlayer: false
    };

    this.childrenArray = Children.toArray(this.props.children);

    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  toggleActiveTab(evt, btn) {
    if (btn.props.links) {
      this.setState({showPlayer: true});
    } else {
      this.setState({showPlayer: false});
    }

    this.setState({
      activeTab: evt.target.name,
      showContent: true,
    });
  }

  renderLinks(activeTab, childrenArray) {
    return childrenArray.map((item, i) => {
      if (item.props.name === activeTab) {
        return (
          <div key={item + i}>
            {item}
          </div>
        );
      }
      return false;
    });
  }

  render() {
    const {
      activeLink,
      showErrorPopup
    } = this.props;

    const {
      activeTab,
      showContent,
      showPlayer
    } = this.state;

    return (
      <>
        <div className={`play-view`}>
          <ul className={`play-view__menu menu`}>
            {this.childrenArray.map((btn, i) => {
              return (
                <li key={btn.props.name + i} className={`menu__item menu__item${activeTab === btn.props.name ? `--active` : ``}`}>
                  <button
                    name={btn.props.name}
                    className={`btn menu__btn menu__btn${activeTab === btn.props.name ? `--active` : ``}`}
                    onClick={(evt) => this.toggleActiveTab(evt, btn)}
                  >
                    {btn.props.name.toUpperCase()}
                  </button>
                </li>
              );
            })}
          </ul>


          {showContent ?
            <div className={`play-view__wrapper`}>
              {showPlayer ? <Player activeLink={activeLink} /> : null}
              {this.renderLinks(activeTab, this.childrenArray, activeLink)}
            </div> : null}

          <div className={`play-view__footer`}>
            <span className={`visually-hidden`}>
              Decorative footer
            </span>
          </div>
        </div>
        {showErrorPopup ? <ErrorPopup /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
  showErrorPopup: getErrorPopupStatus(state),
});

PlayViews.propTypes = {
  activeLink: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showErrorPopup: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(PlayViews);
