import React, {Children, PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Player from "../player/player.jsx";
import Links from "../links/links.jsx";
import ErrorPopup from "../error-popup/error-popup.jsx";

import {getActiveLink, getPopup} from "../../reducer/state/selectors";
import {ActionCreator} from "../../reducer/state/state.js";

class PlayViews extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: ``,
      showContent: false,
    };

    this.childerArray = Children.toArray(this.props.children);
    this.toggleActiveTab = this.toggleActiveTab.bind(this);
  }

  toggleActiveTab(evt) {
    this.setState({
      activeTab: evt.target.name,
      showContent: true,
    });
  }

  renderLinks(activeTab, array, activeLink) {
    const {toggleActiveLink} = this.props;

    return array.map((item, i) => {
      if (item.props.name.toLowerCase() === activeTab.toLowerCase()) {
        return (
          <Links
            key={item + i}
            activeLink={activeLink}
            links={item.props.links}
            toggleActiveLink={toggleActiveLink}
          />
        );
      }

      return false;
    });
  }

  render() {
    const {activeLink, showPopup} = this.props;
    const {activeTab, showContent} = this.state;

    return (
      <>
        <div className={`play-view`}>
          <ul className={`play-view__menu menu`}>
            {this.childerArray.map((btn, i) => {
              return (
                <li key={btn.props.name + i} className={`menu__item menu__item${activeTab === btn.props.name.toLowerCase() ? `--active` : ``}`}>
                  <button
                    name={btn.props.name.toLowerCase()}
                    className={`btn menu__btn menu__btn${activeTab === btn.props.name.toLowerCase() ? `--active` : ``}`}
                    onClick={(evt) => this.toggleActiveTab(evt)}
                  >
                    {btn.props.name}
                  </button>
                </li>
              );
            })}
          </ul>


          {showContent ?
            <div className={`play-view__wrapper`}>
              <Player activeLink={activeLink} />
              {this.renderLinks(activeTab, this.childerArray, activeLink)}
            </div> :
            null}
        </div>
        {showPopup ? <ErrorPopup /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
  showPopup: getPopup(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleActiveLink(link) {
    return dispatch(ActionCreator.toggleActiveLink(link));
  },
  togglePopup(popup) {
    return dispatch(ActionCreator.togglePopup(popup));
  }
});

PlayViews.propTypes = {
  children: PropTypes.node.isRequired,
  activeLink: PropTypes.string.isRequired,
  showPopup: PropTypes.bool.isRequired,
  toggleActiveLink: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayViews);
