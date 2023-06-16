import React from "react";
import CounterContainer from "./container/CounterContainer";
import SampleContainer from "./container/SampleContainer";

const App = () => {
  return (
    <div>
      <SampleContainer />
      <hr />
      <br />
      <CounterContainer />
    </div>
  );
};

export default App;
