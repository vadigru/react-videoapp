import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/state/state.js";
import {checkUrl} from "../../clientApi.js";
// import axios from "axios";

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

  // checkUrl(link) {
  //   const {toggleActiveLink, togglePopup} = this.props;
  //   const showPopup = () => {
  //     togglePopup(true);
  //   };

  //   axios.get(link)
  //     .then((res) => {
  //       if (res.status < 400) {
  //         toggleActiveLink(link);
  //       }
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         togglePopup(true);
  //       }
  //     });
  // }

  // handleFocus(ref, inputedLink, link) {
  //   ref.current.value = !inputedLink ? link : inputedLink;
  // }

  // handleBlur(ref, inputedLink, link) {
  //   ref.current.value = inputedLink ? inputedLink : link;
  // }

  render() {
    const {links, toggleActiveLink, togglePopup} = this.props;

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
                  value={inputedLink === undefined ? link : inputedLink}
                  // onFocus={() => this.handleFocus(inputRef, inputedLink, link)}
                  // onBlur={() => this.handleBlur(inputRef, inputedLink, link)}
                  onChange={(evt) => this.handleInput(evt, `link${i + 1}`)}
                />
                <button
                  className={`links__btn`}
                  // onClick={() => checkUrl((inputedLink === undefined ? link : inputedLink), toggleActiveLink, togglePopup)}
                  onClick={() => checkUrl(inputedLink === undefined ? link : inputedLink).then((data) => data !== false ? toggleActiveLink(data) : togglePopup(true))}
                >
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

const mapDispatchToProps = (dispatch) => ({
  togglePopup(popup) {
    return dispatch(ActionCreator.togglePopup(popup));
  },
});

export default connect(null, mapDispatchToProps)(Links);
