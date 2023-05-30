import { useState } from "react";
import "./App.css";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";
import Ref from "./Ref";
import Todo2 from "./Todo2";
import Callback from "./useCallback";

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
      <Todo2 />
      <hr />
      <br />
      유즈메모
      <Average />
      <hr />
      <br />
      유즈콜백
      <Callback />
      <hr />
      <br />
      유즈REF
      <Ref />
    </div>
  );
}

export default App;
