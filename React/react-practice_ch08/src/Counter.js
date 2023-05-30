import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, name: "" };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_NAME":
      return { ...state, name: action.name };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, name: "" });

  const handleSetName = (e) => {
    dispatch({ type: "SET_NAME", name: e.target.value });
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={state.name} onChange={handleSetName} />
      </div>
      <div>
        현재 카운터 값은 <b>{state.count}</b>입니다.
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <b>{state.name}</b>
      </div>
    </div>
  );
};

export default Counter;
