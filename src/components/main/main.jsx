import React, {Children, PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ErrorPopup from "../error-popup/error-popup.jsx";
import Menu from "../menu/menu.jsx";
import Footer from "../footer/footer.jsx";
import Player from "../player/player.jsx";

import {
  getActiveLink,
  getActiveTab,
  getErrorPopup,
  getShowContent,
  getShowPlayer,
} from "../../reducer/state/selectors";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.childrenArray = Children.toArray(this.props.children);
  }

  renderLinks(activeTab, childrenArray) {
    return childrenArray.map((child, i) => {
      if (child.props.name === activeTab) {
        return (
          <div key={child.props.name + i}>
            {child}
          </div>
        );
      }
      return false;
    });
  }

  render() {
    const {
      activeLink,
      activeTab,
      showContent,
      showErrorPopup,
      showPlayer,
    } = this.props;

    return (
      <>
        <div className={`main`}>
          <Menu
            childrenArray={this.childrenArray}
            toggleShowContent={this.toggleShowContent}
          />
          {showContent ?
            <div className={`main__wrapper`}>
              {showPlayer ? <Player activeLink={activeLink} /> : null}
              {this.renderLinks(activeTab, this.childrenArray, activeLink)}
            </div> :
            null}
          <Footer />
        </div>
        {showErrorPopup ? <ErrorPopup /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
  activeTab: getActiveTab(state),
  showErrorPopup: getErrorPopup(state),
  showContent: getShowContent(state),
  showPlayer: getShowPlayer(state),
});

Main.propTypes = {
  activeLink: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showErrorPopup: PropTypes.bool.isRequired,
  showContent: PropTypes.bool.isRequired,
  showPlayer: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Main);
