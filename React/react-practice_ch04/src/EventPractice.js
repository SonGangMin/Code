import React, { Component } from "react";

export default class EventPractice extends Component {
  render() {
    return (
      <div>
        <h2>이벤트 연습</h2>
        <input
          type={"text"}
          name="message"
          placeholder="아무거나입력"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}
