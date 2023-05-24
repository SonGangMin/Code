import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import Reducer from "./reducer";
import InputReducer from "./inputReducer";
import Average from "./Average";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Counter />}
      <br />
      <hr />
      <h1>useReducer</h1>
      <Reducer />
      <hr />
      <h1>인풋리듀서</h1>
      <InputReducer />
      <hr />
      <h1>Average</h1>
      <Average />
      <hr />
      <h1>커스텀훅</h1>
      <Info />
    </div>
  );
}

export default App;
