// import React, { Component } from "react";
// import MyComponent from "./MyComponent";
// import MyClassComponent from "./MyClassComponent";
// import Counter from "./Counter";
// import Say from "./say";
// import EventPractice from "./EventPractice";
// import EventPracticeForm from "./EventPracticeForm";
// import EventPracticefunc from "./EventPracticefunc";
import { Component } from "react";
import IterationSample from "./IterationSample";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";
class App extends Component {
  render() {
    return (
      <>
        {/* <MyComponent name={1} favoriteNumber={101} email={"skm@skm.com"}>
        나는 자식이다.
      </MyComponent>
      <br />
      <MyClassComponent name={"강민"} email={"skm"} favoriteNumber={3}>
        ㅋㅋㅋ
      </MyClassComponent>
      <br />
      <Counter></Counter>
      <br />
      <Say /> */}
        {/* <EventPractice />
      <br />
      함수
      <EventPracticefunc />
      <br />
      Form사용
      <EventPracticeForm /> */}
        <ValidationSample />
        <br />
        스크롤박스
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
        <br />
        IterationSample
        <br />
        <IterationSample />
      </>
    );
  }
}

export default App;
