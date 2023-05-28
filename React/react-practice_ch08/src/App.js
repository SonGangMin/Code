import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  const onClickVisible = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={onClickVisible}>{!visible ? "보이기" : "숨기기"}</button>
      <Counter />
      {visible && <Info />}
    </div>
  );
}

export default App;
