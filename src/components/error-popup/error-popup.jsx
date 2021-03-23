import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import {ActionCreator} from "../../reducer/state/state.js";
import {ActionCreator as UserActionCreator} from "../../reducer/user/user.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";

import ErrorButton from "../error-button/error-button.jsx";

class ErrorPopup extends PureComponent {
  constructor(props) {
    super(props);

    this.setAuthStatus = props.setAuthStatus;
    this.resetData = props.resetData;
    this.resetState = props.resetState;
  }

  reset = () => {
    this.resetData();
    this.resetState();
    this.setAuthStatus(false);
  }

  onInput(e) {
    console.log(`onInput: `, e.code);
    if (e.code === `Backspace`) {
      alert(`this is backspace`);
    }

    if (this.active) {
      return this.active.onInput(e);
    }
  }

  render() {
    return (
      <div className={`error`} >
        <div className={`error__popup`}>
          <p className={`error__text`}>An error has occurred</p>
          <ErrorButton
          {...{
            ref: el => this.active = el,
            reset: this.reset,
        }} />
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  resetData() {
    return dispatch(DataActionCreator.resetData());
  },
  resetState() {
    return dispatch(ActionCreator.resetState());
  },
  setAuthStatus(auth) {
    return dispatch(UserActionCreator.setAuthStatus(auth));
  },
});

ErrorPopup.propTypes = {
  resetData: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  setAuthStatus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps, null, {forwardRef: true})(ErrorPopup);
