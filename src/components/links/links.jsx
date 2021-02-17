import React from "react";
// import {connect} from "react-redux";
import PropTypes from "prop-types";

// import {getLinks} from "../../reducer/state/selectors";

import "./links.scss";

class Links extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };

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

  handleBlur(ref, newLink, link) {
    ref.current.value = newLink ? newLink : link;
  }

  render() {
    const {links, linksChanged, toggleActiveLink} = this.props;
    console.log(links);

    return (
      <div className={`play-links`}>
        <ul className={`play-links links`}>
          {links.map((link, i) => {
            const newLink = this.state[`link${i + 1}`];
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
                  value={newLink || link}
                  onFocus={() => this.handleFocus(inputRef)}
                  onBlur={() => this.handleBlur(inputRef, newLink, link)}
                  onInput={(evt) => this.handleInput(evt, `link${i + 1}`)}
                />
                <button
                  className={`links__btn`}
                  onClick={() => toggleActiveLink(newLink || link)}>
                    PLAY {linksChanged}
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
};

// const mapStateToProps = {};

// const mapDispatchToProps = {};

export default Links;
