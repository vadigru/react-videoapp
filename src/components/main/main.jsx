import React, {Children, cloneElement, PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ErrorPopup from "../error-popup/error-popup.jsx";
import Footer from "../footer/footer.jsx";
import Menu from "../menu/menu.jsx";
import Player from "../player/player.jsx";

import {
  getActiveLink,
  getActiveTab,
  getErrorPopup,
  getShowingContent,
  getShowingPlayer,
} from "../../reducer/state/selectors";
import {getLinks} from "../../reducer/data/selectors.js";

import {shuffleArray} from "../../utils/common.js";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.childrenArray = Children.toArray(this.props.children);
    this.linksActionMap = {
      REVERSE: `reverse`,
      SHUFFLE: `shuffle`
    };
  }

  onInput(e) {
    if (e.code === `Enter`) {
      alert(`this is enter`)
    }
    if (e.code === `Space`) {
      alert(`this is space`);
    }
    if (this.error) {
      return this.error.onInput(e);
    }
  }

  onKeyDown = (e) => { // или = (e) => или this.onKeyDown = this.onKeyDown.bind(this) в конструкторе
    return this.onInput(e);
  }

  onKeyUp = (e) => {
    return this.onInput(e);
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this.onKeyDown, true);
    document.addEventListener(`keyup`, this.onKeyUp, true);
  }

  componentWillUnmount() {
    document.removeEventListener(`keydown`, this.onKeyDown, true);
    document.removeEventListener(`keyup`, this.onKeyUp, true);
  }

  switchLinks(action, links) {
    switch (action) {
      case this.linksActionMap.REVERSE:
        links = links.slice().reverse();
        break;
      case this.linksActionMap.SHUFFLE:
        links = shuffleArray(links.slice());
        break;
      default:
        links;
        break;
    }
    return links;
  }

  renderLinks(activeTab, childrenArray) {
    const {links} = this.props;

    return childrenArray.map((child, i) => {
      if (child.props.name === activeTab) {
        if (!child.props.links) {
          const newLinks = this.switchLinks(child.props[`data-action`], links);
          const newChild = cloneElement(child, {links: newLinks});
          return (
            <div key={child.props.name + i}>
              {newChild}
            </div>
          );
        } else {
          return (
            <div key={child.props.name + i}>
              {child}
            </div>
          );
        }
      }

      return false;
    });
  }

  render() {
    const {
      activeLink,
      activeTab,
      isContentShowing,
      isErrorPopupShowing,
      isPlayerShowing,
    } = this.props;

    return (
      <>
        <div className={`main`}>
          <Menu
            childrenArray={this.childrenArray}
            toggleShowContent={this.toggleShowContent}
          />
          {isContentShowing ?
            <div className={`main__wrapper`}>
              {isPlayerShowing ? <Player activeLink={activeLink} /> : null}
              {this.renderLinks(activeTab, this.childrenArray, activeLink)}
            </div> :
            null}
          <Footer />
        </div>
        {isErrorPopupShowing ? <ErrorPopup ref={(el) => (this.error = el)} key="t" /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
  activeTab: getActiveTab(state),
  isErrorPopupShowing: getErrorPopup(state),
  isContentShowing: getShowingContent(state),
  isPlayerShowing: getShowingPlayer(state),
  links: getLinks(state),
});

Main.propTypes = {
  activeLink: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isErrorPopupShowing: PropTypes.bool.isRequired,
  isContentShowing: PropTypes.bool.isRequired,
  isPlayerShowing: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default connect(mapStateToProps, null)(Main);
