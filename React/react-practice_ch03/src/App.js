import "./App.css";
import ClassCounter from "./ClassCounter";
import FuncCounter from "./FuncCounter";
import MyComponent from "./MyComponent";
function App() {
  const name = undefined;
  return (
    <>
      <MyComponent name={name} favoriteNumber={4}>
        리액트
      </MyComponent>
      <br />
      <hr />
      클래스형 컴포넌트의 state
      <ClassCounter />
      <br />
      <hr />
      함수형 컴포넌트의 state
      <FuncCounter />
    </>
  );
}

export default App;
