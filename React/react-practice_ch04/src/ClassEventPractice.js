import React, { Component } from "react";

export default class ClassEventPractice extends Component {
  state = {
    username: "",
    message: "",
  };
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // handleChange(e) {
  //   this.setState({
  //     message: e.target.value,
  //   });
  // }
  // handleClick(e) {
  //   alert(this.state.message);
  //   this.setState({
  //     message: "",
  //   });
  // }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = (e) => {
    alert(this.state.username + "=" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };
  render() {
    return (
      <div>
        <h2>이벤트연습</h2>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}
