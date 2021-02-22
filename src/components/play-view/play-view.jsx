import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Links from "../links/links.jsx";

import {getActiveLink} from "../../reducer/state/selectors.js";

const PlayView = (props) => {
  const {
    activeLink,
    links,
  } = props;

  return (
    <Links
      activeLink={activeLink}
      links={links}
    />
  );
};

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
});

PlayView.propTypes = {
  activeLink: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};

PlayView.displayName = `PlayView`;

export default connect(mapStateToProps, null)(PlayView);
