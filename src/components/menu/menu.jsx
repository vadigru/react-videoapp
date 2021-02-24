import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {getActiveTab} from "../../reducer/state/selectors.js";

const Menu = (props) => {
  const {
    childrenArray,
    activeTab,
    setActiveTab,
    showContent,
    showPlayer,
  } = props;

  const toggleContentVisibility = (child) => {
    if (child.props.links) {
      showPlayer(true);
    } else {
      showPlayer(false);
    }

    showContent(true);
  };

  return (
    <ul className={`main__menu menu`}>
      {childrenArray.map((child, i) => {
        return (
          <li key={child.props.name + i} className={`menu__item ${activeTab === child.props.name ? `menu__item--active` : ``}`}>
            <button
              name={child.props.name}
              className={`btn menu__btn ${activeTab === child.props.name ? `menu__btn--active` : ``}`}
              onClick={() => {
                setActiveTab(child.props.name);
                toggleContentVisibility(child);
              }}
            >
              {child.props.name.toUpperCase()}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  activeTab: getActiveTab(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTab(tab) {
    return dispatch(ActionCreator.setActiveTab(tab));
  },
  showContent(isContent) {
    return dispatch(ActionCreator.showContent(isContent));
  },
  showPlayer(isPlayer) {
    return dispatch(ActionCreator.showPlayer(isPlayer));
  },
});

Menu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  childrenArray: PropTypes.arrayOf(PropTypes.node).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  showContent: PropTypes.func.isRequired,
  showPlayer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
