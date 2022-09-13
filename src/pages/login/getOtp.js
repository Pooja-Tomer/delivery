import React, { Component } from "react";
// import OtpInput from "react-otp-input";

export default class GetOTP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      numInputs: 6,
      separator: "-",
      isDisabled: false,
      hasErrored: false,
      isInputNum: false,
      isInputSecure: false,
      minLength: 0,
      maxLength: 40,
      placeholder: "",
    };
  }

  handleOtpChange = (otp) => {
    this.setState({ otp });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNumInputsChange = (e) => {
    let numInputs = e.target.value;
    const { minLength, maxLength } = this.state;

    if (numInputs < minLength || numInputs > maxLength) {
      numInputs = 4;

      // console.error(
      //   `Please enter a value between ${minLength} and ${maxLength}`
      // );
    }

    this.setState({ [e.target.name]: parseInt(numInputs, 10) });
  };

  clearOtp = () => {
    this.setState({ otp: "" });
  };

  handleCheck = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: !prevState[name] }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/manager";
    // alert(this.state.otp);
  };

  render() {
    const {
      otp,
      numInputs,
      // separator,
      isDisabled,
      // hasErrored,
      // isInputNum,
      // isInputSecure,
      // placeholder,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="heading">Enter verification code</h4>
        <br />
        <div className="margin-top--small">
          {/* <OtpInput
            inputStyle="inputStyle"
            numInputs={numInputs}
            isDisabled={isDisabled}
            hasErrored={hasErrored}
            errorStyle="error"
            onChange={this.handleOtpChange}
            separator={<span>{separator}</span>}
            isInputNum={isInputNum}
            isInputSecure={isInputSecure}
            shouldAutoFocus
            value={otp}
            placeholder={placeholder}
          /> */}
        </div>
        <div className="btn-row mt-4 text-right">
          <button
            className="btn margin-top--large btn-clear-outline"
            type="button"
            disabled={isDisabled || otp.trim() === ""}
            onClick={this.clearOtp}
          >
            Clear
          </button>
          <button
            className="btn margin-top--large btn-success"
            disabled={otp.length < numInputs}
          >
            Confirm
          </button>
        </div>
      </form>
    );
  }
}
