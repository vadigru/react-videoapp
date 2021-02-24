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
  getErrorPopupStatus
} from "../../reducer/state/selectors";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      showPlayer: false
    };

    this.childrenArray = Children.toArray(this.props.children);

    this.toggleShowContent = this.toggleShowContent.bind(this);
  }

  toggleShowContent(child) {
    if (child.props.links) {
      this.setState({showPlayer: true});
    } else {
      this.setState({showPlayer: false});
    }

    this.setState({
      showContent: true,
    });
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
      showErrorPopup
    } = this.props;

    const {
      showContent,
      showPlayer
    } = this.state;

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
  showErrorPopup: getErrorPopupStatus(state),
});

Main.propTypes = {
  activeLink: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  showErrorPopup: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Main);
