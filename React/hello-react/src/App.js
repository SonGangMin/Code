// import React, { Component } from "react";
// import MyComponent from "./MyComponent";
// import MyClassComponent from "./MyClassComponent";
// import Counter from "./Counter";
// import Say from "./say";
// import EventPractice from "./EventPractice";
// import EventPracticeForm from "./EventPracticeForm";
// import EventPracticefunc from "./EventPracticefunc";
import { Component } from "react";
// import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
// import ScrollBox from "./ScrollBox";
// import ValidationSample from "./ValidationSample";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div className="container">
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
        {/* <ValidationSample />
        <br />
        스크롤박스
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
        <br />
        IterationSample
        <br />
        <IterationSample /> */}
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
