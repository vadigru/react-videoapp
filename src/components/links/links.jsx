import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/state/state.js";

// import {getLinks} from "../../reducer/state/selectors";

import "./links.scss";

class Links extends React.PureComponent {
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

  handleFocus(ref) {
    ref.current.value = ``;
  }

  handleBlur(ref, inputedLink, link) {
    ref.current.value = inputedLink ? inputedLink : link;
  }

  checkUrl(link) {
    const {toggleActiveLink, togglePopup} = this.props;
    const showPopup = () => {
      togglePopup(true);
    };
    fetch(link)
    .then(function (response) {
      if (response.status > 400) {
        showPopup();
      } else {
        toggleActiveLink(link);
      }
    });
  }

  render() {
    const {links} = this.props;

    return (
      <div className={`play-links`}>
        <ul className={`play-links links`}>
          {links.map((link, i) => {
            const inputedLink = this.state[`link${i + 1}`];
            const inputRef = this[`${i + 1}`];
            return (
              <li
                className={`links__item`}
                key={i}>
                <label className={`links__label`}>{i + 1}</label>
                <input
                  ref={inputRef}
                  className={`links__input`}
                  type="text"
                  value={inputedLink || link}
                  onFocus={() => this.handleFocus(inputRef)}
                  onBlur={() => this.handleBlur(inputRef, inputedLink, link)}
                  onInput={(evt) => this.handleInput(evt, `link${i + 1}`)}
                />
                <button
                  className={`links__btn`}
                  onClick={() => this.checkUrl(inputedLink || link)}>
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
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleActiveLink: PropTypes.func.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

// const mapStateToProps = {};

const mapDispatchToProps = (dispatch) => ({
  togglePopup(popup) {
    return dispatch(ActionCreator.togglePopup(popup));
  }
});

export default connect(null, mapDispatchToProps)(Links);
