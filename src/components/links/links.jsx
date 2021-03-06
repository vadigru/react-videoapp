import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {getActiveLink} from "../../reducer/state/selectors.js";

import {checkUrl} from "../../clientApi.js";

class Links extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.links = this.props.links || [];
    this.renderedLinks = [];
    this.links.forEach((link, i) => {
      this[`${i + 1}`] = React.createRef();
    });

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.renderedLinks = this.links.map((item) => item);
  }

  handleInput(evt, inputKey) {
    this.setState({
      [inputKey]: evt.target.value
    });
  }

  checkInputedLink(evt, inputedLink, link) {
    const {
      setActiveLink,
      showErrorPopup,
      setLinks,
    } = this.props;
    const selectedLink = inputedLink === undefined ? link : inputedLink;

    if (evt.type === `click` || evt.key === `Enter`) {
      checkUrl(selectedLink)
      .then((response) => {
        if (!response) {
          showErrorPopup(true);
        } else {
          setActiveLink(selectedLink);
          this.renderedLinks.splice(evt.target.dataset.id, 1, inputedLink || link);
          setLinks(this.renderedLinks);
        }
      });
    }
  }

  render() {
    const {activeLink} = this.props;

    return (
      <ul className={`play-links links`}>
        {this.links.map((link, i) => {
          const inputKey = `input${i + 1}`;
          const inputRef = this[`${i + 1}`];
          const inputedLink = this.state[inputKey];
          const selectedLink = inputedLink === undefined ? link : inputedLink;

          return (
            <li
              className={`links__item`}
              key={link + i}>
              <label className={`links__label`}>
                <span className={`links__number`}>{i + 1}</span>
                <input
                  ref={inputRef}
                  className={`links__input`}
                  data-id={i}
                  type="text"
                  value={selectedLink}
                  onChange={(evt) => this.handleInput(evt, inputKey)}
                  onKeyPress={(evt) => this.checkInputedLink(evt, inputedLink, link)}
                />
                <button
                  data-id={i}
                  className={`btn links__btn`}
                  onClick={(evt) => this.checkInputedLink(evt, inputedLink, link)}
                >
                  {activeLink === selectedLink && inputedLink !== `` ?
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
  setActiveLink: PropTypes.func.isRequired,
  setLinks: PropTypes.func.isRequired,
  showErrorPopup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeLink: getActiveLink(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveLink(link) {
    return dispatch(ActionCreator.setActiveLink(link));
  },
  showErrorPopup(popup) {
    return dispatch(ActionCreator.showErrorPopup(popup));
  },
  setLinks(links) {
    return dispatch(DataActionCreator.setLinks(links));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Links);
