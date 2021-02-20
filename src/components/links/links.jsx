import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {checkUrl} from "../../clientApi.js";

class Links extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};

    this.props.links.forEach((link, i) => {
      this[`${(i + 1)}`] = React.createRef();
    });

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt, link) {
    this.setState({
      [link]: evt.target.value
    });
  }

  render() {
    const {links, toggleActiveLink, togglePopup, activeLink} = this.props;
    return (
      <ul className={`play-links links`}>
        {links.map((link, i) => {
          const inputedLink = this.state[`link${i + 1}`];
          const inputRef = this[`${i + 1}`];
          return (
            <li
              className={`links__item`}
              key={i}>
              <label className={`links__label`}>
                <input
                  ref={inputRef}
                  className={`links__input`}
                  type="text"
                  value={inputedLink === undefined ? link : inputedLink}
                  onChange={(evt) => this.handleInput(evt, `link${i + 1}`)}
                />
                <button
                  className={`btn links__btn`}
                  onClick={
                    () => {
                      checkUrl(inputedLink === undefined ? link : inputedLink)
                      .then((data) => {
                        if (!data) {
                          toggleActiveLink(` `);
                          togglePopup(true);
                        } else {
                          toggleActiveLink(inputedLink === undefined ? link : inputedLink);
                        }
                      });
                    }
                  }
                >
                  {activeLink === (inputedLink === undefined ? link : inputedLink) ?
                    <span className={`links__btn-text`}>
                      PLAY
                      <span className={`dot`}></span>
                    </span> :
                    `PLAY`}
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    );
  }
}

Links.propTypes = {
  activeLink: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleActiveLink: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  togglePopup(popup) {
    return dispatch(ActionCreator.togglePopup(popup));
  },
});

export default connect(null, mapDispatchToProps)(Links);
