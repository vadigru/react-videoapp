import React from "react";
import PropTypes from "prop-types";

import {LINKS} from "../../const.js";

import "./links.scss";

class Links extends React.PureComponent {
  constructor(props) {
    super(props);

  }


  render() {
    const {toggleActiveLink} = this.props;
    return (
      <div className={`play-links`}>
        <ul className={`play-links links`}>
          {LINKS.map((link, i) => {
            return (
              <li
                className={`links__item`}
                key={i}>
                <input
                  className={`links__input`}
                  type="text"
                  value={`${link}`}
                />
                <button
                  className={`links__btn`}
                  onClick={() => toggleActiveLink(link)}>
                    PLAY
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Links.propTypes = {
  toggleActiveLink: PropTypes.func.isRequired
};

export default Links;
