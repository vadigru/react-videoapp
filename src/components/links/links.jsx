import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";

import {checkUrl} from "../../clientApi.js";

class Links extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.links = this.props.links || [];
    this.links.forEach((link, i) => {
      this[`${(i + 1)}`] = React.createRef();
    });

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(evt, link) {
    this.setState({
      [link]: evt.target.value
    });
  }

  checkInputedLink(evt, inputedLink, link) {
    const {
      toggleActiveLink,
      toggleErrorPopupStatus
    } = this.props;

    if (evt.type === `click` || evt.key === `Enter`) {
      checkUrl(inputedLink === undefined ? link : inputedLink)
      .then((response) => {
        if (!response) {
          toggleErrorPopupStatus(true);
        } else {
          toggleActiveLink(inputedLink === undefined ? link : inputedLink);
        }
      });
    }
  }

  render() {
    const {
      activeLink,
    } = this.props;

    return (
      <ul className={`play-links links`}>
        {this.links.map((link, i) => {
          const inputedLink = this.state[`link${i + 1}`];
          const inputRef = this[`${i + 1}`];

          return (
            <li
              className={`links__item`}
              key={i}>
              <label className={`links__label`}>
                <span className={`links__number`}>{i + 1}</span>
                <input
                  ref={inputRef}
                  className={`links__input`}
                  type="text"
                  value={inputedLink === undefined ? link : inputedLink}
                  onChange={(evt) => this.handleInput(evt, `link${i + 1}`)}
                  onKeyPress={(evt) => this.checkInputedLink(evt, inputedLink, link)}
                />
                <button
                  className={`btn links__btn`}
                  onClick={(evt) => this.checkInputedLink(evt, inputedLink, link)}
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
  links: PropTypes.arrayOf(PropTypes.string),
  toggleActiveLink: PropTypes.func.isRequired,
  toggleErrorPopupStatus: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleActiveLink(link) {
    return dispatch(ActionCreator.toggleActiveLink(link));
  },
  toggleErrorPopupStatus(popup) {
    return dispatch(ActionCreator.toggleErrorPopupStatus(popup));
  },
});

export default connect(null, mapDispatchToProps)(Links);
