import React, { Component } from "react";

export default class ClassEventPractice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h2>이벤트연습</h2>
        <input
          type={"text"}
          name="message"
          placeholder="아무거나입력"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
            console.log(this.state.message);
          }}
        />
      </div>
    );
  }
}
