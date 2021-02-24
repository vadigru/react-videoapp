import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {getActiveTab} from "../../reducer/state/selectors.js";

const Menu = (props) => {
  const {
    childrenArray,
    activeTab,
    toggleActiveTab,
    toggleShowContent,
    toggleShowPlayer,
  } = props;

  const toggleContentVisibility = (child) => {
    if (child.props.links) {
      toggleShowPlayer(true);
    } else {
      toggleShowPlayer(false);
    }

    toggleShowContent(true);
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
                toggleActiveTab(child.props.name);
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
  toggleActiveTab(tab) {
    return dispatch(ActionCreator.toggleActiveTab(tab));
  },
  toggleShowContent(isContent) {
    return dispatch(ActionCreator.toggleShowContent(isContent));
  },
  toggleShowPlayer(isPlayer) {
    return dispatch(ActionCreator.toggleShowPlayer(isPlayer));
  },
});

Menu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  childrenArray: PropTypes.arrayOf(PropTypes.node).isRequired,
  toggleActiveTab: PropTypes.func.isRequired,
  toggleShowContent: PropTypes.func.isRequired,
  toggleShowPlayer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
